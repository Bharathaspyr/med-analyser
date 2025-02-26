import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperclip, FaPaperPlane, FaSpinner, FaUserCircle, FaDownload, FaPlus, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState(["Chat 1"]);
  const [currentSession, setCurrentSession] = useState("Chat 1");
  const username = "Ahalya";

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
    link.download = "chat_history.txt";
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

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white">
      <div className="w-1/4 bg-black bg-opacity-30 p-6 shadow-lg h-full overflow-y-auto flex flex-col">
        <h2 className="text-2xl font-bold mb-6 border-b border-white pb-2 flex justify-between items-center">
          Chat History
          <button onClick={handleNewSession} className="text-lg bg-white text-black px-2 py-1 rounded-lg flex items-center">
            <FaPlus className="mr-1" /> New
          </button>
        </h2>
        <div className="flex-1 space-y-4 overflow-y-auto">
          {sessions.map((session, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white bg-opacity-20 rounded-lg shadow cursor-pointer">
              <span onClick={() => setCurrentSession(session)} className={`${session === currentSession ? "bg-opacity-40" : ""}`}>
                {session}
              </span>
              <button onClick={() => handleDeleteSession(session)} className="text-red-500 hover:text-red-700">
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6 justify-end items-center relative">
        <div className="absolute top-6 right-6 flex items-center gap-4 bg-white bg-opacity-20 p-3 rounded-lg shadow-md">
          <FaUserCircle className="text-2xl" />
          <span className="text-lg font-semibold">{username}</span>
          <button onClick={handleExportChat} className="text-white bg-green-500 px-3 py-1 rounded-lg flex items-center">
            <FaDownload className="mr-2" /> Export Chat
          </button>
        </div>
        
        {messages.length === 0 ? (
          <div className="flex flex-col items-center text-center space-y-4 flex-1 justify-center">
            <h2 className="text-4xl font-bold text-white">Welcome to MedScan AI</h2>
            <p className="text-lg text-white max-w-lg">Upload an image and ask a question to get started. Our AI will assist you in analyzing your media.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white bg-opacity-20 rounded-lg shadow-lg w-full max-w-4xl">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5 bg-white bg-opacity-30 rounded-lg shadow-lg max-w-2xl w-full"
              >
                {msg.image && (
                  <div className="mb-3 w-full">
                    <img src={URL.createObjectURL(msg.image)} alt="upload" className="rounded-lg shadow" />
                    <p className="text-white text-sm mt-2">{msg.image.name}</p>
                  </div>
                )}
                <p className="text-white font-medium text-lg">{msg.text}</p>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 p-5 bg-white bg-opacity-20 shadow-md rounded-lg border-t border-gray-300 mt-6 w-full max-w-4xl">
          <label className="cursor-pointer text-white hover:text-gray-300 transition">
            <FaPaperclip className="text-2xl" />
            <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
          </label>
          <input
            type="text"
            className="flex-1 border rounded-lg p-4 shadow-sm focus:ring focus:ring-indigo-400 text-lg bg-transparent text-white placeholder-gray-300"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleSendMessage} 
            className="bg-indigo-600 text-white p-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center w-14 h-14"
          >
            {loading ? <FaSpinner className="animate-spin text-2xl" /> : <FaPaperPlane className="text-2xl" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;