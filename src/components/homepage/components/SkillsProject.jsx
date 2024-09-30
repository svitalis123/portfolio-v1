import React from 'react';
import { motion} from 'framer-motion';

const SkillsProject = ({skills}) => {
  return (
    <div className=' h-full max-w-[1330px] mx-auto'>
       <section className="min-h-screen py-16 px-8">
        <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center h-32 bg-[#492c49] rounded-xl shadow-neumorphic-dark"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-xl font-semibold text-[#ecc7bc]">{skill}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SkillsProject
