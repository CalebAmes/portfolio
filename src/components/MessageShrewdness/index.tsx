import './MessageShrewdness.scss';
import { useEffect, useState, useRef } from 'react';
import { fetchMessages } from '../../utils/api';
import socket from '../../services/socket';
import MessageInput from '../MessageInput';
import { seedAutoComplete, autoComplete } from '../../services/autoComplete';
import ChatComponent from '../ChatComponent';
import Navigation from '../Navigation';
import { applyTheme } from '../index'

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

  // const main = () => {
  //   window.localStorage.setItem('user-data', JSON.stringify({ theme: "main" }));
  //   scrollRef.current.classList.remove("darkmode")
  //   scrollRef.current.classList.remove("blue")
  //   scrollRef.current.classList.add("main");
  // };

  // const darkmode = () => {
  //   window.localStorage.setItem('user-data', JSON.stringify({ theme: "darkmode" }));
  //   scrollRef.current.classList.remove("main")
  //   scrollRef.current.classList.remove("blue")
  //   scrollRef.current.classList.add("darkmode");
  // };

  // const blue = () => {
  //   window.localStorage.setItem('user-data', JSON.stringify({ theme: "blue" }));
  //   scrollRef.current.classList.remove("darkmode")
  //   scrollRef.current.classList.remove("main")
  //   scrollRef.current.classList.add("blue");
  // };

  // const applyTheme = () => {
  //   const userDataString: any = window.localStorage.getItem('user-data');
  //   const userData: any = JSON.parse(userDataString)
  //   console.log('this is user data: ', userData)
  //   if (userData && userData?.theme) {
  //     console.log('userData.theme: ', userData.theme)
  //     userData.theme === 'main' ? main() : userData.theme === 'darkmode' ? darkmode() : blue();
  //   }
  // }

  useEffect(() => {
    seedAutoComplete();

    socket.on(`chat_message_1`, (msg) => {
      fetchMessages().then(res => setMessages(() => res))
    })
    socket.on(`edit_channel_1`, async () => {
      fetchMessages().then(res => setMessages(() => res))
    });
    fetchMessages().then(res => setMessages(() => res))

    applyTheme();
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
    <div className='messageContainer' ref={scrollRef}>
      <Navigation applyTheme={applyTheme} />
      <div className="messagesDiv">
        {
          messages.map((message, i) => (
            <ChatComponent key={i} message={message} />
          ))
        }
      </div>
      <MessageInput autoComplete={autoComplete} />
    </div>
  )
}

export default MessageShrewdness