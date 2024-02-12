import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetchData();
    // console.log("type of =>setChats",typeof setChats);
  }, []);
  const fetchData = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  return (
    <div>
      {chats.map((chat, index) => (
        <div key={index}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
