import React from 'react';
import { InlineMath } from 'react-katex';

type Props = { children?: string };

// Simple renderer that replaces $...$ with KaTeX InlineMath and **bold** with <strong>
export default function MathInline({ children = '' }: Props) {
  const parts = children.split(/(\$[^$]+\$)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          return <InlineMath key={i} math={math} />;
        }

        // render **bold** segments inside non-math text
        const segs = part.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i}>
            {segs.map((s, j) => {
              if (!s) return null;
              if (s.startsWith('**') && s.endsWith('**')) {
                return <strong key={j}>{s.slice(2, -2)}</strong>;
              }
              return <span key={j}>{s}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}
