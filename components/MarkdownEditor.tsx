import React, { useRef } from 'react';
import { Bold, Italic, Link as LinkIcon, List, ListOrdered, Heading1, Heading2, Quote } from 'lucide-react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);

    // Set cursor position after React re-renders
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const tools = [
    { icon: <Bold size={16} />, action: () => insertText('**', '**'), title: 'Negrito' },
    { icon: <Italic size={16} />, action: () => insertText('*', '*'), title: 'Itálico' },
    { icon: <Heading1 size={16} />, action: () => insertText('# ', ''), title: 'Título 1' },
    { icon: <Heading2 size={16} />, action: () => insertText('## ', ''), title: 'Título 2' },
    { icon: <List size={16} />, action: () => insertText('- ', ''), title: 'Lista' },
    { icon: <ListOrdered size={16} />, action: () => insertText('1. ', ''), title: 'Lista Numerada' },
    { icon: <Quote size={16} />, action: () => insertText('> ', ''), title: 'Citação' },
    { icon: <LinkIcon size={16} />, action: () => insertText('[', '](url)'), title: 'Link' },
  ];

  return (
    <div className="border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-500 transition-all">
      <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-wrap gap-1">
        {tools.map((tool, index) => (
          <button
            key={index}
            type="button"
            onClick={tool.action}
            title={tool.title}
            className="p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 rounded transition-colors"
          >
            {tool.icon}
          </button>
        ))}
      </div>
      <textarea
        ref={textareaRef}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 outline-none resize-y min-h-[300px] font-mono text-sm"
        placeholder="Escreva seu conteúdo em Markdown aqui..."
      />
    </div>
  );
};

export default MarkdownEditor;
