import { useMemo, useState } from 'react';
import { Menu } from 'lucide-react';
import { useReadingProgress, useActiveSection } from './reader/useReaderNavigation';
import BlogTableOfContents from './reader/BlogTableOfContents';
import TerminalCodeBlock from './reader/TerminalCodeBlock';

const renderBlock = (block, index) =>
  block.type === 'code' ? (
    <TerminalCodeBlock key={index} code={block.content} language={block.language} />
  ) : (
    // Sanitised twice server-side: on write in the upload endpoint and again on
    // read in BlogDataService.getPostBySlug.
    <div key={index} dangerouslySetInnerHTML={{ __html: block.content }} />
  );

/** @param {{ blogData: import('@/services/blogMappers').BlogPost }} props */
const RenderIndividualBlog = ({ blogData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sections arrive already split by the server, so this component renders
  // identically during SSR and hydration — no DOM API needed at render time.
  const sections = blogData.sections ?? [];
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  const progress = useReadingProgress();
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-[#201d1b] w-full text-[#fff] font-sans">
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-40"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="lg:flex">
        {/* The mobile drawer previously had a Close button but nothing that opened
            it, so the table of contents was unreachable below the lg breakpoint. */}
        {sections.length > 0 && (
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            className="lg:hidden fixed bottom-6 left-6 z-30 flex items-center gap-2 rounded-full bg-[#ecc7bc] px-4 py-3 text-sm font-medium text-[#201d1b] shadow-lg"
          >
            <Menu size={16} aria-hidden="true" />
            Contents
          </button>
        )}

        <BlogTableOfContents
          sections={sections}
          activeSection={activeSection}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />

        <main className="lg:w-3/4 lg:ml-auto">
          <div className="px-4 lg:px-8 pb-16 max-w-3xl pt-16 lg:pt-8">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8">{blogData.title}</h1>

            <div className="prose prose-invert max-w-none">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-4">{section.title}</h2>
                  <div className="space-y-4">{section.content.map(renderBlock)}</div>
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
