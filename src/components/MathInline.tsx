import React from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MathInlineProps {
  children: string;
}

/**
 * A component that renders Markdown with LaTeX math support.
 * Uses remark-math and rehype-katex for high-quality mathematical rendering.
 */
const MathInline: React.FC<MathInlineProps> = ({ children }) => {
  return (
    <div className="math-inline-container prose prose-stone max-w-none">
      <Markdown 
        remarkPlugins={[remarkMath]} 
        rehypePlugins={[rehypeKatex]}
      >
        {children}
      </Markdown>
    </div>
  );
};

export default MathInline;
