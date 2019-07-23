import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default ({ children, inline = false }) => {
  return (
    <div style={{ fontSize: '1.5rem', ...(inline ? {display: 'inline'} : {}) }}>
      <SyntaxHighlighter language="javascript">
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
