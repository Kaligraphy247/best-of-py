import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { FiGitCommit } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import Link from "next/link";

export default function ProjectGitHubSection() {
  return (
    <div className="border-b border-t mt-8">
      <div className="py-2 pl-3 flex border-b">
        <Image
          src={"/github-mark.svg"}
          alt="github logo"
          width={24}
          height={24}
        />
        <h2 className="pl-3 flex self-center">
          GitHub &nbsp;&middot;<span>&nbsp;1.4k stars</span>
        </h2>
      </div>
      <div className="border-b border-dashed">
        <div className="grid grid-cols-2 mx-4 my-3 space-y-2">
          <div>
            <Link href="" className="text-blue-500 flex pt-2">
              averylonglinkaverylonglink
              <span className="pt-0.5">
                <TbExternalLink />
              </span>
            </Link>
          </div>
          <div>created when, ... and other stuff</div>
          <div>
            <div className="flex">
              <div className="pt-[0.20rem]">
                <BsPeopleFill />
              </div>
              <p className="pl-2">9 contributors</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="pt-[0.20rem]">
                <FiGitCommit />
              </div>
              <p className="pl-2">135 commits</p>
            </div>
          </div>
        </div>
      </div>

      {/* chart area */}
      <div className="border-b border-dashed">
        <div className="w-full h-[14rem]">
          <div className="justify-center flex">
            <p className="border border-dashed p-1 justify-center flex my-10">chart area placeholder</p>
          </div>
        </div>
      </div>
      {/* end of chart area */}
      
    </div>
  );
}
