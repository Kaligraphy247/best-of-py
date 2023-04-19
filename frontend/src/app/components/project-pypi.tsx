import Image from "next/image";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

export default function ProjectPypiSection() {
  return (
    <div className="border-b border-t mt-8">
      <div className="py-2 pl-3 flex border-b">
        <Image src={"/pypi.svg"} alt="github logo" width={24} height={24} />
        <h2 className="pl-3 flex self-center">
          Library on &nbsp;
          <Link href="https://pypi.org" className="hover:underline">
            Pypi
          </Link>
        </h2>
      </div>

      <div className="border-b border-dashed">
        <div className="">
          <div className="flex space-x-2 mx-4 my-3">
            <Link href="" className="text-blue-500 flex pt-2">
              averylonglinkaverylonglink
              <span className="pt-0.5">
                <TbExternalLink />
              </span>
            </Link>
            <div className="pt-1">
              <p className="border rounded px-1">4.0.1</p>
            </div>
          </div>
        </div>
      </div>

      {/* chart area */}
      <div className="border-b border-dashed">
        <div className="w-full h-[14rem]">
          <div className="justify-center flex">
            <p className="border border-dashed p-1 justify-center flex my-10">
              chart area placeholder
            </p>
          </div>
        </div>
      </div>
      {/* end of chart area */}
    </div>
  );
}
