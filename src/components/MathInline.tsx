import React from 'react';
import Markdown from 'react-markdown';

interface MathInlineProps {
  children: string;
}

/**
 * A simplified version of MathInline that uses react-markdown.
 * In a full implementation, this would integrate with KaTeX.
 */
const MathInline: React.FC<MathInlineProps> = ({ children }) => {
  return (
    <div className="math-inline-container">
      <Markdown>{children}</Markdown>
    </div>
  );
};

export default MathInline;
