import Link from "next/link";
import { FaReadme } from "react-icons/fa";
import ReadmeMarkdownComponent from "./markdown-component";
import { readFileSync } from "fs";

/**
 * #### Project Github Component
 * 
 * Found in single-project component, the Github section.
 * 
 * Contains README from Github, for a project.
 */
export default function ProjectReadmeSection() {
  // const markdown = readFileSync("/Users/James/Downloads/README.md", {
  //   // const markdown = readFileSync("./README.md", {
  //   encoding: "utf-8",
  // });
  // console.log(markdown);

  const markdown = `Here is some JavaScript code:

  ~~~js
  console.log('It works!')
  ~~~
  `;

  return (
    <div className="border-t mt-8 ">
      <div className="py-2 pl-3 flex border-b">
        <div className="pt-1">
          <FaReadme size={18} />
        </div>
        <h2 className="pl-3 flex self-center text-lg">README</h2>
      </div>
      <div className="border-t border-dashed pt-8">
        <ReadmeMarkdownComponent markdownString={markdown} />
        <div className="text-center border-t py-4 w-full">
          <Link href={""} className="hover:underline">
            View on Github
          </Link>
        </div>
      </div>
    </div>
  );
}
