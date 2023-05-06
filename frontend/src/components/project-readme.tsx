import Link from "next/link";
import { FaReadme } from "react-icons/fa";
import ReadmeMarkdownComponent from "./markdown-component";


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
  let a = c;
  ~~~
  # Heading 1
  ## Heading 2
  - list 1
  - list 2
  - [ ] checkbox list
  - [x] checked list
  `;

  return (
    <div className="border-t mt-8 ">
      <div className="py-2 pl-3 flex">
        <div className="pt-1">
          <FaReadme size={18} />
        </div>
        <h2 className="pl-3 flex self-center text-lg">README</h2>
      </div>
      <div className="border-t pt-0">
        <ReadmeMarkdownComponent markdownString={markdown} />
        <div className="text-center border-t border-dashed py-4 w-full bg-[#2b5a83] border-white text-[#ffffff] ">
          <Link href={""} className="hover:underline">
            View on Github
          </Link>
        </div>
      </div>
    </div>
  );
}
