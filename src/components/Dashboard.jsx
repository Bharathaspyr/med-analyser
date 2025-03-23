import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPaperclip, FaPaperPlane, FaSpinner, FaUserCircle, FaDownload, FaPlus, FaTimes, FaBars } from "react-icons/fa";

const Dashboard = () => {

  const location = useLocation();
  const { user } = location.state || {};

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState(["Session 1"]);
  const [currentSession, setCurrentSession] = useState("Session 1");
  const [showHistory, setShowHistory] = useState(true);
  const [renamingSession, setRenamingSession] = useState(null);
  const [newSessionName, setNewSessionName] = useState("");


  const handleSendMessage = () => {
    if (input || file) {
      setLoading(true);
      setTimeout(() => {
        setMessages([...messages, { text: input, image: file }]);
        setInput("");
        setFile(null);
        setLoading(false);
      }, 1500);
    }
  };

  const handleExportChat = () => {
    const chatData = messages.map(msg => msg.text).join("\n");
    const blob = new Blob([chatData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${currentSession}.txt`; 
    link.click();
  };

  const handleNewSession = () => {
    const newSession = `Session ${sessions.length + 1}`;
    setSessions([...sessions, newSession]);
    setCurrentSession(newSession);
    setMessages([]);
  };

  const handleDeleteSession = (session) => {
    if (sessions.length > 1) {
      const updatedSessions = sessions.filter(s => s !== session);
      setSessions(updatedSessions);
      setCurrentSession(updatedSessions[0]);
      setMessages([]);
    }
  };

  const handleRenameSession = (index) => {
    setRenamingSession(index);
    setNewSessionName(sessions[index]);
  };

  const handleSessionNameChange = (e) => {
    setNewSessionName(e.target.value);
  };

  const handleSessionNameSave = (index) => {
    const updatedSessions = [...sessions];
    updatedSessions[index] = newSessionName;
    setSessions(updatedSessions);
    setRenamingSession(null);
  };

  const handleSessionNameBlur = (index) => {
    handleSessionNameSave(index);
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      handleSessionNameSave(index);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#F4F6FA] text-[#1E293B]">
      {/* Chat History Sidebar */}
      {showHistory && (
        <div className="w-1/4 bg-white p-6 shadow-md h-full overflow-y-auto flex flex-col relative rounded-r-xl">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2 flex justify-between items-center text-[#3B82F6]">
            <button onClick={() => setShowHistory(false)} className="text-gray-500 hover:text-gray-800 mr-2">
              <FaTimes />
            </button>
            Chat History
            <button onClick={handleNewSession} className="text-sm bg-[#3B82F6] text-white px-3 py-1 rounded-lg flex items-center">
              <FaPlus className="mr-1" /> New
            </button>
          </h2>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-200 rounded-lg shadow cursor-pointer hover:bg-gray-300"
                onDoubleClick={() => handleRenameSession(index)}
              >
                {renamingSession === index ? (
                  <input
                    type="text"
                    value={newSessionName}
                    onChange={handleSessionNameChange}
                    onBlur={() => handleSessionNameBlur(index)}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                    className="border p-2 rounded-lg"
                  />
                ) : (
                  <span onClick={() => setCurrentSession(session)}>{session}</span>
                )}
                <button onClick={() => handleDeleteSession(session)} className="text-red-500 hover:text-red-700">
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col p-6 justify-end items-center relative">
        {/* Toggle button for chat history */}
        {!showHistory && (
          <button
            onClick={() => setShowHistory(true)}
            className="absolute top-6 left-6 text-gray-600 hover:text-gray-900"
          >
            <FaBars />
          </button>
        )}

        {/* User and Export Chat */}
        <div className="absolute top-6 right-6 flex items-center gap-4 bg-white p-3 rounded-lg shadow-md">
          <FaUserCircle className="text-2xl text-[#3B82F6]" />
          <span className="text-lg font-semibold">{user}</span>
          <button onClick={handleExportChat} className="text-white bg-[#3B82F6] px-1 py-1 rounded-lg flex items-center hover:bg-[#2563EB]">
            <FaDownload className="mr-1" /> 
          </button>
        </div>

        {messages.length === 0 ? (
          <div className="flex flex-col items-center text-center space-y-4 flex-1 justify-center">
            <h2 className="text-3xl font-bold text-[#1E293B]">Welcome to MedScan AI</h2>
            <p className="text-md text-gray-600 max-w-lg">Upload an image and ask a question to get started. Our AI will assist you in analyzing your media.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white rounded-lg shadow-lg w-full max-w-4xl">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5 bg-[#E0ECFF] rounded-lg shadow-lg max-w-2xl w-full"
              >
                {msg.image && (
                  <div className="mb-3 w-full">
                    <img src={URL.createObjectURL(msg.image)} alt="upload" className="rounded-lg shadow" />
                    <p className="text-gray-700 text-sm mt-2">{msg.image.name}</p>
                  </div>
                )}
                <p className="text-[#1E293B] font-medium text-lg">{msg.text}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Message Input and File Upload */}
        <div className="flex items-center gap-4 p-5 bg-white shadow-md rounded-lg mt-6 w-full max-w-4xl">
          <label className="cursor-pointer text-gray-600 hover:text-[#3B82F6] transition">
            <FaPaperclip className="text-2xl" />
            <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
          </label>
          <input
            type="text"
            className="flex-1 border rounded-lg p-4 shadow-sm focus:ring focus:ring-[#3B82F6] text-lg bg-white text-gray-900 placeholder-gray-600"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleSendMessage} 
            className="bg-[#3B82F6] text-white p-4 rounded-lg shadow-lg hover:bg-[#2563EB] transition-all flex items-center justify-center w-14 h-14"
          >
            {loading ? <FaSpinner className="animate-spin text-2xl" /> : <FaPaperPlane className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
