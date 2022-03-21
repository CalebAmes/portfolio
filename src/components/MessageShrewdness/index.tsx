import "./MessageShrewdness.scss";
import { useEffect, useState, useRef } from "react";
import { fetchMessages } from "../../utils/api";
import socket from "../../services/socket";
import MessageInput from "../MessageInput";
import { seedAutoComplete, autoComplete } from "../../services/autoComplete";
import ChatComponent from "../ChatComponent";
import Navigation from "../Navigation";
import { applyTheme } from "../";

interface User {
  username: string;
}
interface MessageArray {
  messageText: string;
  userId: number;
  User: User;
}

const MessageShrewdness = () => {
  const [messages, setMessages] = useState<MessageArray[]>([]);
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    seedAutoComplete();

    socket.on(`chat_message_1`, msg => {
      fetchMessages().then(res => setMessages(() => res));
    });
    socket.on(`edit_channel_1`, async () => {
      fetchMessages().then(res => setMessages(() => res));
    });
    fetchMessages().then(res => setMessages(() => res));

    applyTheme();
  }, []);

  return (
    <div className="messageContainer" ref={scrollRef}>
      <Navigation applyTheme={applyTheme} />
      <div className="messagesDiv">
        {messages.map((message, i) => (
          <ChatComponent key={i} message={message} />
        ))}
      </div>
      <MessageInput autoComplete={autoComplete} />
    </div>
  );
};

export default MessageShrewdness;
