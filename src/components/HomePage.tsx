
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Video, BookOpen, Brain, ArrowRight, Play } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Video,
      title: "HD Video Chat",
      description: "Crystal clear video calls with screen sharing capabilities"
    },
    {
      icon: BookOpen,
      title: "Shared Whiteboard",
      description: "Collaborate in real-time with interactive digital whiteboards"
    },
    {
      icon: Brain,
      title: "AI-Powered Quizzes",
      description: "Adaptive quizzes that adjust to your learning progress"
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Join or create study groups with students worldwide"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-900 text-white py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Study Together,
            <br />
            Succeed Together
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect with students worldwide for collaborative study sessions, interactive learning, and academic success
          </motion.p>
          <motion.div 
            className="space-x-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              onClick={() => onNavigate('dashboard')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Start Studying Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Learn
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful tools designed to enhance your study experience and boost academic performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students already using our platform to achieve academic success
          </p>
          <motion.button
            onClick={() => onNavigate('dashboard')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
