import React from 'react';
import { motion } from 'framer-motion';

const NeumorphicCard = ({ children }) => {
  return (
    <motion.div
      className="bg-gray-100 rounded-xl p-8 shadow-neumorphic hover:shadow-neumorphic-inset transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default NeumorphicCard;