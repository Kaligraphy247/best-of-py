import Link from "next/link";
import { FaReadme } from "react-icons/fa";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
// import unif
import { readFileSync } from "fs";


export default function ProjectReadmeSection() {
  const markdown = readFileSync("/Users/James/Downloads/README.md", {encoding: 'utf-8'})
  // console.log(markdown)

  // const md2 = 

  return (
    <div className="border-b border-t mt-8">
      <div className="py-2 pl-3 flex border-b">
        <div className="pt-1">
          <FaReadme size={18} />
        </div>
        <h2 className="pl-3 flex self-center text-lg">README</h2>
      </div>
      <div className="border-t border-dashed pt-8 w-fit">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]} className="px-4 pb-4"></ReactMarkdown>
        <div className="text-center border-t py-4">
            <Link href={""} className="hover:underline">View on Github</Link>
        </div>
      </div>
    </div>
  );
}
