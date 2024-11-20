import React, { useState, useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { useNavigate } from "react-router-dom";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const navigate = useNavigate();

  // State to store the current time
  const [currentTime, setCurrentTime] = useState("");

  // Function to format the time as "HH:MM AM/PM"
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  // Update the current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(formatTime(now));
    }, 60000); // Update every minute

    // Set initial time
    setCurrentTime(formatTime(new Date()));

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (id) => {
    if (window.innerWidth <= 768) { // Mobile screen width
      navigate(`/conversation/${id}`);
    }
  };

  return (
    <div
      className={`${
        isSelected ? "bg-sky-600" : "hover:bg-gray-100"
      } flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-150`}
      onClick={() => {
        setSelectedConversation(conversation);
        handleNavigate(conversation._id);
      }}
    >
      <div className="relative w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-white">
        <img
          src={conversation.profilePic}
          alt="user avatar"
          className="w-full h-full rounded-full object-cover"
        />
        {isOnline && (
          <span className="absolute z-10 top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>
      <div className="flex-1">
        <p
          className={`text-sm font-medium text-gray-700 ${
            isSelected ? "text-white" : ""
          }`}
        >
          {conversation.fullName}
        </p>
        <p
          className={`text-xs text-gray-500 truncate ${
            isSelected ? "text-green-500" : ""
          }`}
        >
          {isOnline ? "online" : ""}
        </p>
      </div>
      <span
        className={`text-xs text-gray-600 ${isSelected ? "text-white" : ""}`}
      >
        {currentTime}
      </span>
    </div>
  );
};

export default Conversation;