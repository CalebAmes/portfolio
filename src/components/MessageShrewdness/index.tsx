import './MessageShrewdness.scss';
import { useEffect, useState, useRef } from 'react';
import { fetchMessages } from '../../utils/api';
import { io } from "socket.io-client";
import MessageInput from '../MessageInput';
import { seedAutoComplete, autoComplete } from '../../services/autoComplete';

const socket = io("https://shrewdness.herokuapp.com/")

interface User {
  username: string
}
interface MessageArray {
  messageText: string,
  userId: number,
  User: User,
}

const MessageShrewdness = () => {
  const [messages, setMessages] = useState<MessageArray[]>([]);
  const [message, setMessage] = useState<string>("");
  const scrollRef = useRef<any>(null);


  const scroll = () => {
    if (scrollRef.current?.lastChild) {
      scrollRef.current.lastChild.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    seedAutoComplete();

    socket.on(`chat_message_1`, (msg) => {
      fetchMessages().then(res => setMessages(() => res)).then(scroll)
    })
    socket.on(`edit_channel_1`, async () => {
      fetchMessages().then(res => setMessages(() => res))
    });
    fetchMessages().then(res => setMessages(() => res)).then(scroll)
  }, []);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const sendMessage = () => {
    if (message.trim() === "") return;

    const messageObject = {
      messageText: message.trim(),
      userId: 1,
      channelId: 1,
      messageImg: null,
    }

    socket.emit(`chatMessage`, messageObject);
  };

  const keyPress = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage()
      setMessage("");
    };
  };

  return (
    <div className='messageContainer'>
      <MessageInput autoComplete={autoComplete}/>
      <div className="messagesDiv" ref={scrollRef}>
        {
          messages.map((message, i) => {
            let isDemoMessage = false;
            if (message.userId === 1) isDemoMessage = true;
            return (
              <div key={i} style={isDemoMessage ? { alignSelf: "end", textAlign: "end" } : {}} className="singleMessage">
                <p>{message.User.username}</p>
                <h3>{message.messageText}</h3>
              </div>
            )
          })
        }
      </div>
      <input
        placeholder="press 'enter' to send"
        type="text"
        maxLength={140}
        onChange={inputHandler}
        onKeyPress={keyPress}
        value={message}
      />
    </div>
  )
}

export default MessageShrewdness