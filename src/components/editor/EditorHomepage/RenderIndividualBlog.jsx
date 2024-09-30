import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const parseBlogContent = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const sections = [];
  let currentSection = null;

  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === 'H1' || node.tagName === 'H2') {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          id: node.textContent.toLowerCase().replace(/\s+/g, '-'),
          title: node.textContent,
          content: []
        };
      } else if (currentSection) {
        currentSection.content.push(node.outerHTML);
      }
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
};

const RenderIndividualBlog = ({ blogData }) => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(parseBlogContent(blogData.content));
  }, [blogData.content]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#201d1b] w-full text-[#fff] font-sans">
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="lg:flex">
        <nav className={`lg:w-1/4 lg:max-w-[300px] lg:fixed lg:h-screen p-8 bg-[#ecc7bc] shadow-md z-40 ${isMenuOpen ? 'fixed inset-0' : 'hidden lg:block'}`}>
          <button onClick={() => setIsMenuOpen(false)} className="lg:hidden absolute top-4 right-4 text-gray-700">
            Close
          </button>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`text-sm ${activeSection === section.id ? 'text-blue-600 font-semibold' : 'text-gray-900'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <main className="lg:w-3/4 lg:ml-auto">
          <div className="lg:hidden fixed top-0 left-0 w-full bg-[#201d1b] p-4 z-30 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold ">{blogData.title}</h1>
            <button onClick={() => setIsMenuOpen(true)} className="">
              <Menu size={24} />
            </button>
          </div>
          
          <div className="px-4 lg:px-8 pb-16 max-w-[768px] bg-[#201d1b] ml-0 pt-16 lg:mt-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 ">{blogData.title}</h1>
            
            <div className="mb-8 text-gray-600">
              <span>By {blogData.author} | </span>
              <span>{new Date(blogData.publishDate).toLocaleDateString()}</span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Categories:</h2>
              <div className="flex flex-wrap gap-2">
                {blogData.categories.length > 0 ? (
                  blogData.categories.map((category, index) => (
                    <span key={index} className="bg-blue-100 px-2 py-1 rounded">
                      {category}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">No categories</span>
                )}
              </div>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 ">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 ">{section.title}</h2>
                <div className=" space-y-4 " dangerouslySetInnerHTML={{ __html: section.content.join('') }}></div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RenderIndividualBlog;
// import React, { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';

// const blogData = {
//   title: "The Future of Artificial Intelligence",
//   image: "/api/placeholder/800/600",
//   sections: [
//     {
//       id: "introduction",
//       title: "Introduction",
//       content: "Artificial Intelligence (AI) has been rapidly evolving, transforming various aspects of our lives. From voice assistants to autonomous vehicles, AI is becoming increasingly integrated into our daily routines."
//     },
//     {
//       id: "key-areas",
//       title: "Key Areas of AI Development",
//       content: [
//         {
//           subtitle: "Machine Learning",
//           items: ["Deep Learning", "Neural Networks"]
//         },
//         {
//           subtitle: "Natural Language Processing",
//           items: ["Speech Recognition", "Language Translation"]
//         },
//         {
//           subtitle: "Computer Vision",
//           items: ["Image Recognition", "Object Detection"]
//         },
//         {
//           subtitle: "Robotics",
//           items: ["Autonomous Robots", "Human-Robot Interaction"]
//         }
//       ]
//     },
//     {
//       id: "ethical-considerations",
//       title: "Ethical Considerations",
//       content: "As AI becomes more advanced and ubiquitous, several ethical considerations come to the forefront:\n\n1. Privacy and Data Protection\n2. Bias and Fairness\n3. Accountability\n4. Transparency\n5. Job Displacement"
//     },
//     {
//       id: "conclusion",
//       title: "Conclusion",
//       content: "The future of Artificial Intelligence holds immense potential to revolutionize our world. As we continue to develop and integrate AI into various aspects of our lives, it's crucial to balance innovation with ethical considerations. By doing so, we can harness the power of AI to create a more efficient, sustainable, and equitable future for all."
//     }
//   ]
// };

// const RenderIndividualBlog = () => {
//   const [activeSection, setActiveSection] = useState('introduction');
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll = document.documentElement.scrollTop;
//       const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//       const scrolled = (winScroll / height) * 100;
//       setScrollProgress(scrolled);

//       const sections = document.querySelectorAll('section');
//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen  bg-black text-white font-sans">
//       <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50" style={{ width: `${scrollProgress}%` }}></div>
      
//       <div className="lg:flex ">
//         <nav className={`lg:w-1/4 lg:fixed lg:h-screen p-8 bg-black z-40 ${isMenuOpen ? 'fixed inset-0' : 'hidden lg:block'}`}>
//           <button onClick={() => setIsMenuOpen(false)} className="lg:hidden absolute top-4 right-4 text-white">
//             Close
//           </button>
//           <ul className="space-y-4">
//             {blogData.sections.map((section) => (
//               <li key={section.id}>
//                 <a
//                   href={`#${section.id}`}
//                   className={`text-sm ${activeSection === section.id ? 'text-white' : 'text-gray-500'}`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {section.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
        
//         <main className="lg:w-3/4  lg:ml-auto">
//           <div className="lg:hidden fixed top-0 left-0 w-full bg-black p-4 z-30 flex justify-between items-center">
//             <h1 className="text-xl font-bold">{blogData.title}</h1>
//             <button onClick={() => setIsMenuOpen(true)} className="text-white">
//               <Menu size={24} />
//             </button>
//           </div>
          
//           <img src={blogData.image} alt="AI concept" className="w-full max-w-[768px] h-auto mb-8 mt-16 lg:mt-0" />
          
//           <div className="px-4 lg:px-8 pb-16 max-w-[768px]">
//             <h1 className="text-2xl lg:text-3xl font-bold mb-8 hidden lg:block">{blogData.title}</h1>
            
//             {blogData.sections.map((section) => (
//               <section key={section.id} id={section.id} className="mb-12">
//                 <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-blue-400">{section.title}</h2>
//                 {typeof section.content === 'string' ? (
//                   <p className="text-gray-300 whitespace-pre-line">{section.content}</p>
//                 ) : (
//                   section.content.map((contentItem, index) => (
//                     <div key={index} className="mb-4">
//                       <h3 className="text-lg lg:text-xl font-semibold mb-2 text-blue-300">{index + 1}. {contentItem.subtitle}</h3>
//                       <ul className="list-disc list-inside text-gray-300">
//                         {contentItem.items.map((item, itemIndex) => (
//                           <li key={itemIndex}>{item}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))
//                 )}
//               </section>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default RenderIndividualBlog;