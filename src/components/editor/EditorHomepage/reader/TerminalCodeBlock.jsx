import { Terminal } from 'lucide-react';

/**
 * Renders a stored code block as a terminal window.
 *
 * The code is printed verbatim. The previous version ran it through a "formatter"
 * that split on semicolons and re-indented by counting braces, which rewrote any
 * snippet that was not a sequence of simple one-line JS statements.
 */
const TerminalCodeBlock = ({ code, language = 'bash' }) => (
  <div className="my-6 bg-[#2d2d2d] rounded-lg overflow-hidden shadow-lg">
    <div className="bg-[#3d3d3d] px-4 py-2 flex items-center">
      <div className="flex gap-2 mr-4" aria-hidden="true">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="flex items-center text-[#ddd] text-sm">
        <Terminal size={14} className="mr-2" aria-hidden="true" />
        <span>{language}</span>
      </div>
    </div>

    <div className="p-4 font-mono text-sm">
      <pre className="text-[#f8f8f2] overflow-x-auto whitespace-pre m-0">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default TerminalCodeBlock;
