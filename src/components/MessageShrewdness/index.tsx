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
  
  useEffect(() => {
    socket.on(`chat_message_1`, () => {
      fetchMessages().then(res => setMessages(() => res))
    })
    socket.on(`edit_channel_1`, async () => {
      fetchMessages().then(res => setMessages(() => res))
    });
    fetchMessages().then(res => setMessages(() => res))
  }, [])

  console.log('this is messages outside of useEffect:', messages)

  return (
    <>
      <div>MessageShrewdness</div>
      {
        messages.map((message, i) => {
          console.log('this is message.messageText', message.messageText)
          return (
          <div key={i} className="singleMessage">
            <p>{message.messageText}</p>
          </div>
        )})
      }
    </>
  )
}

export default MessageShrewdness