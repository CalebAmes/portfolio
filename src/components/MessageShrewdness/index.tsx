import './MessageShrewdness.scss';
import { useEffect, useState } from 'react';
import { fetchMessages } from '../../utils/api';
import { io } from "socket.io-client";

const socket = io("https://shrewdness.herokuapp.com/")

interface MessageArray {
  messageText: string
}

const MessageShrewdness = () => {
  const [messages, setMessages] = useState<MessageArray[]>([])
  const [message, setMessage] = useState<any>("")

  useEffect(() => {
    socket.on(`chat_message_1`, () => {
      fetchMessages().then(res => setMessages(() => res))
    })
    socket.on(`edit_channel_1`, async () => {
      fetchMessages().then(res => setMessages(() => res))
    });
    fetchMessages().then(res => setMessages(() => res))
  }, [])

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
      <div>MessageShrewdness</div>
      {
        messages.map((message, i) => {
          return (
            <div key={i} className="singleMessage">
              <p>{message.messageText}</p>
            </div>
          )
        })
      }
      <input
        type="text"
        maxLength={140}
        onChange={inputHandler}
        onKeyPress={keyPress}
        value={message} />
    </div>
  )
}

export default MessageShrewdness