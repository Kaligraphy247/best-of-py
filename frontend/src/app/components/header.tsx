import Link from "next/link";

// { children }: { children: React.ReactNode }
export default function CustomHeader() {
  return (
    <div className="mx-auto p-3 flex border space-x-8">
      <Link href={""} className="flex">
        <img src="/python-logo.svg" className="h-8 mr-3" alt="Logo" />
        <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
          Best of Python
        </span>
      </Link>
      <div className="header-text mr-3 w-full self-center font-medium">
        {/* className="flex justify-evenly" */}
        <ul className="flex justify-evenly">
          <li><Link href={''} className="hover:animate-pulse">Home</Link></li>
          <li><Link href={''} className="hover:animate-pulse">Projects</Link></li>
          <li><Link href={''} className="hover:animate-pulse">Tags</Link></li>
        </ul>
      </div>
    </div>
  );
}
