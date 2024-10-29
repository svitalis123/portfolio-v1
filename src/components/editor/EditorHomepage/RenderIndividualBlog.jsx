import React, { useState, useEffect } from 'react';
import { Menu, Terminal } from 'lucide-react';

const formatCode = (code) => {
  // Split by semicolons and handle special cases
  return code
    .split(';')
    .map(line => line.trim())
    .filter(line => line.length > 0) // Remove empty lines
    .map(line => {
      // Handle import statements (keep them together)
      if (line.startsWith('import ')) {
        return `${line};`;
      }
      // Handle lines that are part of object properties or array items
      if (line.includes('{') && !line.includes('}')) {
        return `${line};`;
      }
      // Add indentation for nested code
      const indentLevel = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      const indent = '  '.repeat(Math.max(0, indentLevel));
      return `${indent}${line};`;
    })
    .join('\n');
};

const TerminalCodeBlock = ({ code, language = 'bash' }) => {
  const formattedCode = formatCode(code);
  
  return (
    <div className="my-6 bg-[#2d2d2d] rounded-lg overflow-hidden shadow-lg">
      {/* Terminal Header */}
      <div className="bg-[#3d3d3d] px-4 py-2 flex items-center">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex items-center text-[#ddd] text-sm">
          <Terminal size={14} className="mr-2" />
          <span>terminal</span>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        <div className="flex items-start">
          <span className="text-[#6bf982] mr-2">$</span>
          <pre className="text-[#f8f8f2] overflow-x-auto whitespace-pre">
            <code>{formattedCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const parseBlogContent = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const sections = [];
  let currentSection = null;

  const isHeading = (node) => {
    return ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.tagName);
  };

  const isCodeBlock = (node) => {
    return node.tagName === 'CODE' || node.tagName === 'PRE';
  };

  const processNode = (node) => {
    if (isCodeBlock(node)) {
      return {
        type: 'code',
        content: node.textContent,
        language: node.getAttribute('data-language') || 'bash'
      };
    }
    return {
      type: 'html',
      content: node.outerHTML
    };
  };

  const createSection = (title, node) => {
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = {
      id: title.toLowerCase().replace(/\s+/g, '-'),
      title: title.trim(),
      content: [processNode(node)]
    };
  };

  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (isHeading(node)) {
        createSection(node.textContent, node);
      } else if (node.tagName === 'P' && node.querySelector('strong')) {
        const strongText = node.querySelector('strong').textContent;
        createSection(strongText, node);
      } else if (currentSection) {
        currentSection.content.push(processNode(node));
      } else {
        currentSection = {
          id: 'introduction',
          title: 'Introduction',
          content: [processNode(node)]
        };
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

  const renderContent = (content) => {
    if (content.type === 'code') {
      return <TerminalCodeBlock code={content.content} language={content.language} />;
    }
    return <div dangerouslySetInnerHTML={{ __html: content.content }} />;
  };

  return (
    <div className="min-h-screen bg-[#201d1b] w-full text-[#fff] font-sans">
      {/* Rest of the component remains the same */}
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
          <div className="px-4 lg:px-8 pb-16 max-w-3xl pt-16 lg:pt-8">
            <div className="prose prose-invert max-w-none">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((content, index) => (
                      <div key={index}>{renderContent(content)}</div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RenderIndividualBlog;