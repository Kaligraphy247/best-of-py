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

export default function ReadmeMarkdownComponent({markdownString}: ReadmeMarkdownComponentProps) {
  // const markdown = readFileSync("/Users/James/Downloads/README.md", {
  //   encoding: "utf-8",
  // });
  // console.log(markdown)

  // const markdown = `Here is some JavaScript code:

  // ~~~js
  // console.log('It works!')
  // ~~~
  // `;

  // markdownString
  const md2 = `
  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
  `;

  const markdownTable = `
  | S/N | Pet | Image |
  |--|--|--|
  | 1 | Cat |![A cat looking at you](https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=68615bab04be2077a471009ffc236509) |
  | 2 | Dog |![A dog looking at you](https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg)|
  `;

  const cssMarkdownCodeblock = `CSS code example:
 
~~~css
.container{
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}
 
.child-1{
  background-color: red;
}
 
.child-2{
  background-color: blue;
}
 
~~~
`;


const data = markdownString
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
