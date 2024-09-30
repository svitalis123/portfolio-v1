import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';



const Whiteboard = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 120" 
    className="w-32 h-40 opacity-20"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
  >
    <rect x="10" y="10" width="80" height="60" fill="#492c49" stroke="#ecc7bc" strokeWidth="2"/>
    <line x1="50" y1="70" x2="40" y2="110" stroke="#ecc7bc" strokeWidth="2"/>
    <line x1="50" y1="70" x2="60" y2="110" stroke="#ecc7bc" strokeWidth="2"/>
    <line x1="30" y1="110" x2="70" y2="110" stroke="#ecc7bc" strokeWidth="2"/>
  </motion.svg>
);

const KanbanBoard = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 120 80" 
    className="w-40 h-28 opacity-20"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
  >
    <rect x="0" y="0" width="120" height="80" fill="#492c49" stroke="#ecc7bc" strokeWidth="2"/>
    <line x1="40" y1="0" x2="40" y2="80" stroke="#ecc7bc" strokeWidth="2"/>
    <line x1="80" y1="0" x2="80" y2="80" stroke="#ecc7bc" strokeWidth="2"/>
    <rect x="5" y="5" width="30" height="10" fill="#e34b3a" stroke="#ecc7bc" strokeWidth="1"/>
    <rect x="45" y="5" width="30" height="10" fill="#e34b3a" stroke="#ecc7bc" strokeWidth="1"/>
    <rect x="85" y="5" width="30" height="10" fill="#e34b3a" stroke="#ecc7bc" strokeWidth="1"/>
  </motion.svg>
);

const TriangularRuler = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 87" 
    className="w-24 h-20 opacity-20"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 0.2, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5 }}
  >
    <polygon points="0,87 100,87 50,0" fill="#492c49" stroke="#ecc7bc" strokeWidth="2"/>
    <line x1="10" y1="77" x2="90" y2="77" stroke="#ecc7bc" strokeWidth="1"/>
    <line x1="20" y1="67" x2="80" y2="67" stroke="#ecc7bc" strokeWidth="1"/>
    <line x1="30" y1="57" x2="70" y2="57" stroke="#ecc7bc" strokeWidth="1"/>
  </motion.svg>
);

const ProjectSection = ({ project }) => {
  return (
    <main className='panel w-screen h-screen p-8 '>
    <section className="min-h-screen w-screen flex flex-col justify-center items-center p-8 relative">
      <motion.div className="absolute hidden md:block left-10 top-20 z-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Whiteboard />
      </motion.div>
      <motion.div className="absolute hidden md:block right-10 top-10 z-0"
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: -50 }}
       transition={{ duration: 0.5 }}
      >
        <TriangularRuler />
      </motion.div>
      <motion.div className="absolute hidden md:block right-20 bottom-40 z-0"
       initial={{ opacity: 0, x: 50 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: -50 }}
       transition={{ duration: 0.5 }}
      >
        <KanbanBoard />
      </motion.div>
      
      <h2 className="text-2xl font-bold text-[#e34b3a] mb-4">{project.type.toUpperCase()}</h2>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#e34b3a]">{project.title}</h1>
      <AnimatePresence mode="wait">
      <motion.p 
        className="text-xl mb-8 max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {project.description}
      </motion.p>
      </AnimatePresence>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {project.technologies.map((tech, index) => (
          <motion.span 
            key={index} 
            className="bg-[#492c49] text-[#ecc7bc] px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <motion.button 
        className="neumorphic-button flex items-center px-6 py-3 rounded-full text-[#ecc7bc] bg-[#2a2624] transition-all duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
        <ChevronRight className="ml-2" />
      </motion.button>
    </section>
    </main>
  );
};

const FeaturedProjects = ({projects}) => {
  return (
    <section className="flex !w-[100vw] bg-[#201d1b] text-[#ecc7bc] overflow-hidden">
      <h2 className="text-4xl font-bold absolute top-8 left-8 z-10">
        Featured Projects
      </h2>

      <div className="w-full">
      <AnimatePresence mode='wait'>
        <motion.div className="flex h-full">
          <style jsx global>{`
            .neumorphic-button {
              box-shadow: 5px 5px 10px #161412, -5px -5px 10px #2a2624;
            }
            .neumorphic-button:hover {
              box-shadow: inset 5px 5px 10px #161412,
                inset -5px -5px 10px #2a2624;
            }
          `}</style>
          {projects.map((project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedProjects;






// import React, { useRef, useEffect } from 'react';
// import { motion, useTransform, useScroll } from 'framer-motion';

// const ProjectIllustration = ({ type }) => {
//   return (
//     <div className="w-48 h-48 bg-primary rounded-full flex items-center justify-center text-4xl">
//       {type === 'web' && '🌐'}
//       {type === 'app' && '📱'}
//       {type === 'design' && '🎨'}
//     </div>
//   );
// };

// const ProjectCard = ({ project }) => (
//   <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center p-8">
//     <div className=" w-full bg-[#2a2527] p-6 rounded-lg shadow-lg flex flex-col items-center">
//       <ProjectIllustration type={project.type} />
//       <h3 className="text-3xl font-bold mt-4 mb-2">{project.title}</h3>
//       <p className="text-lg mb-4 text-center">{project.description}</p>
//       <div className="flex flex-wrap justify-center gap-2 mb-4">
//         {project.technologies.map((tech, index) => (
//           <span key={index} className="px-2 py-1 bg-primary text-white rounded-full text-xs">
//             {tech}
//           </span>
//         ))}
//       </div>
//       <button className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-80 transition-colors">
//         View Details
//       </button>
//     </div>
//   </div>
// );

// const FeaturedProjects = ({ projects }) => {

 

//   return (
//     <section className="flex !w-[100vw] bg-[#201d1b] text-[#ecc7bc] overflow-hidden">
//       <h2 className="text-4xl font-bold absolute top-8 left-8 z-10">Featured Projects</h2>
      
//       <div 
      
//         className="w-full"
//       >
//         <motion.div 
//           className="flex h-full"
//         >
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProjects;











