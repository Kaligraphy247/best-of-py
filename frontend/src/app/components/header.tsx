import Link from "next/link";
import Image from "next/image";


/**
 * #### Custom Header Component
 */
export default function CustomHeader() {
  return (
    <div className="mx-auto p-3 flex border space-x-8">
      <Link href={"/"} className="flex">
        <Image
          src="/python-logo.svg"
          className="h-8 mr-3"
          alt="Logo"
          width={48}
          height={48}
        />
        <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
          Best of Python
        </span>
      </Link>
      <div className="header-text mr-3 w-full self-center font-medium">
        {/* className="flex justify-evenly" */}
        <ul className="flex justify-evenly">
          <li>
            <Link href={"/"} className="hover:animate-pulse">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/projects"} className="hover:animate-pulse">
              Projects
            </Link>
          </li>
          <li>
            <Link href={"/tags"} className="hover:animate-pulse">
              Tags
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
