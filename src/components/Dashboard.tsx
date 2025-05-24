
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, TrendingUp, BookOpen, Plus, Calendar, Target } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const activeGroups = [
    {
      id: 1,
      name: "Advanced Calculus Study Group",
      members: 12,
      nextSession: "Today, 3:00 PM",
      subject: "Mathematics",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Biology Lab Prep",
      members: 8,
      nextSession: "Tomorrow, 10:00 AM",
      subject: "Biology",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "History Essay Workshop",
      members: 15,
      nextSession: "Friday, 2:00 PM",
      subject: "History",
      color: "bg-purple-500"
    }
  ];

  const stats = [
    { label: "Study Hours", value: "24", icon: Clock, color: "text-blue-500" },
    { label: "Sessions Joined", value: "18", icon: Users, color: "text-green-500" },
    { label: "Learning Streak", value: "7", icon: TrendingUp, color: "text-purple-500" },
    { label: "Subjects", value: "5", icon: BookOpen, color: "text-orange-500" }
  ];

  return (
    <motion.div 
      className="p-6 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Welcome Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex! 👋</h1>
        <p className="text-blue-100 text-lg">Ready to continue your learning journey?</p>
        <motion.button
          onClick={() => onNavigate('study-session')}
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          Create Study Session
        </motion.button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className={`${stat.color} mb-2`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Active Study Groups */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Active Study Groups</h2>
          <motion.button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
          </motion.button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeGroups.map((group, index) => (
            <motion.div
              key={group.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
              whileHover={{ y: -5 }}
              onClick={() => onNavigate('study-session')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${group.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
                  {group.subject}
                </span>
              </div>
              
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {group.name}
              </h3>
              
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{group.nextSession}</span>
                </div>
              </div>
              
              <motion.button
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 rounded-lg mt-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Session
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Progress Section */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Weekly Progress</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 dark:text-gray-300">Study Goal</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">24/30 hours</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 dark:text-gray-300">Sessions Completed</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">18/25</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div 
                className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ delay: 1.4, duration: 1 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
