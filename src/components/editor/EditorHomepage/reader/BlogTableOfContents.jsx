
const BlogTableOfContents = ({ sections, activeSection, isOpen, onClose }) => (
  <nav
    aria-label="On this page"
    className={`lg:w-1/4 lg:max-w-[300px] lg:fixed lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto p-8 bg-[#ecc7bc] shadow-md z-40 ${
      isOpen ? 'fixed inset-0' : 'hidden lg:block'
    }`}
  >
    <button
      type="button"
      onClick={onClose}
      className="lg:hidden absolute top-4 right-4 text-gray-700"
    >
      Close
    </button>

    <ul className="space-y-4 list-none p-0">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            aria-current={activeSection === section.id ? 'location' : undefined}
            className={`text-sm ${
              activeSection === section.id ? 'text-blue-600 font-semibold' : 'text-gray-900'
            }`}
            onClick={onClose}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default BlogTableOfContents;
