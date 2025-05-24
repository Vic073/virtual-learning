
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Mic, MicOff, VideoOff, Users, MessageSquare, Share, Settings, Phone } from 'lucide-react';

interface StudySessionProps {
  onNavigate: (page: string) => void;
}

const StudySession: React.FC<StudySessionProps> = ({ onNavigate }) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Sarah", message: "Hey everyone! Ready to tackle this calculus problem?", time: "2:30 PM" },
    { id: 2, user: "Mike", message: "Yes! I've been struggling with derivatives", time: "2:32 PM" },
    { id: 3, user: "Alex", message: "Let's start with the chain rule", time: "2:33 PM" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const participants = [
    { id: 1, name: "Sarah", isHost: true, videoOn: true, audioOn: true },
    { id: 2, name: "Mike", isHost: false, videoOn: true, audioOn: false },
    { id: 3, name: "Alex", isHost: false, videoOn: false, audioOn: true },
    { id: 4, name: "Emma", isHost: false, videoOn: true, audioOn: true }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        user: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage("");
    }
  };

  return (
    <motion.div 
      className="h-screen flex flex-col bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.header 
        className="bg-gray-800 p-4 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="flex items-center gap-4">
          <h1 className="text-white text-xl font-semibold">Advanced Calculus Study Group</h1>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Live</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => onNavigate('dashboard')}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            Leave
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Area */}
        <motion.div 
          className="flex-1 p-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Main Video */}
          <div className="bg-gray-800 rounded-xl mb-4 aspect-video flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
            <div className="text-center text-white z-10">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Shared Whiteboard & Screen Share</p>
              <p className="text-sm opacity-75">Host will start sharing soon...</p>
            </div>
          </div>

          {/* Participant Videos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {participants.map((participant, index) => (
              <motion.div
                key={participant.id}
                className="bg-gray-800 rounded-lg aspect-video relative overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                {participant.videoOn ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {participant.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <VideoOff className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                    {participant.name}
                    {participant.isHost && " (Host)"}
                  </span>
                  <div className="flex gap-1">
                    {!participant.audioOn && (
                      <MicOff className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Sidebar */}
        <motion.div 
          className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex flex-col"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Group Chat</h3>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                {participants.length}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <AnimatePresence>
              {chatMessages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`${message.user === 'You' ? 'ml-4' : 'mr-4'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`rounded-lg p-3 ${
                    message.user === 'You' 
                      ? 'bg-blue-600 text-white ml-auto' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}>
                    {message.user !== 'You' && (
                      <div className="text-xs font-medium mb-1 text-blue-600 dark:text-blue-400">
                        {message.user}
                      </div>
                    )}
                    <div className="text-sm">{message.message}</div>
                    <div className={`text-xs mt-1 ${
                      message.user === 'You' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <motion.button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Control Bar */}
      <motion.div 
        className="bg-gray-800 p-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-4">
          <motion.button
            onClick={() => setIsAudioOn(!isAudioOn)}
            className={`p-3 rounded-full ${
              isAudioOn ? 'bg-gray-700 text-white' : 'bg-red-600 text-white'
            } hover:scale-110 transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isAudioOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </motion.button>

          <motion.button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-3 rounded-full ${
              isVideoOn ? 'bg-gray-700 text-white' : 'bg-red-600 text-white'
            } hover:scale-110 transition-all`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </motion.button>

          <motion.button
            className="p-3 rounded-full bg-gray-700 text-white hover:scale-110 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="p-3 rounded-full bg-gray-700 text-white hover:scale-110 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Users className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StudySession;
