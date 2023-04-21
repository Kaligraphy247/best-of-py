"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { readFileSync } from "fs";
import styles from "../components/ProjectReadme.module.css";

type ReadmeMarkdownComponentProps = {
  markdownString: string
}

const markdown = `Here is some JavaScript code:
~~~js
console.log('It works!')
~~~
`;

/**
 * #### Markdown Component
 * 
 * Renders the Markdown string provided, contains settings for
 * customizing what is rendered. 
 */
export default function ReadmeMarkdownComponent({markdownString}: ReadmeMarkdownComponentProps) {
  return (
    <div className="">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkToc]}
        // linkTarget={"_self"}
        // transformLinkUri={(href, children, title) => ""}
        children={markdownString}
        className={styles["markdown-body"]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={dracula}
                language={match[1]}
                PreTag="div"
                // showLineNumbers // * unnecessary in this context
                // showInlineLineNumbers
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}
