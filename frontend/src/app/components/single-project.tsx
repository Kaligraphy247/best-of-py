import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

type ProjectMetadataProps = {
  params: { project: string };
  // optionally, searchParams props, for now.
  searchParams: { [key: string]: [string | string[] | undefined] };
};

type ProjectProps = {
  Item: {
    title: string;
    projectUrl: string;
    imageSrc: string;
    altText: string;
    githubUrl: string;
    projectWebsite: string;
    pypiUrl: string;
    description?: string;
    tags?:
      | {
          tag: string;
          tagUrl: string;
        }[]
      | undefined;
  };
};

// * Dynamically generated Metadata - head tag
export async function generateMetadata(
  { params, searchParams }: ProjectMetadataProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // store route params
  const projectName = params.project;

  // fetch data, it will be cached and reused below
  // instead of making another query ??
  // todo fetch data

  return {
    title: `${projectName} | Best of Python`,
  };
}


export default function SingleProject() {
  return (
    // <div>
      <div className="grid grid-cols-3">
        <div className="flex px-4 py-4 mb-4 drop-shadow-sm justify-between col-span-2">
          <Image src="/pypi-large.svg" alt="stuff" width={54} height={54} />
          <div className="self-center dark:text-white pl-4">
            <section className="flex self-center space-x-2 text-[1.0rem]">
              <Link href={""} className="text-xl font-medium">
                Name-of-Project
              </Link>
            </section>
            <div className="py-1">
              <p className="line-clamp-1 text-[1rem] font-thin ">
                the description of something and other things Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Obcaecati sint id
                consectetur pariatur nam ad Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloremque aliquid laborum, dolor
              </p>
            </div>
            <div>
              <ul className="flex space-x-2">
                <li className="border rounded shadow-sm px-3 py-1">GUI</li>
                <li className="border rounded shadow-sm px-3 py-1">Numpy</li>
                <li className="border rounded shadow-sm px-3 py-1">Django</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        <div className="ml-4 border-dashed px-2 my-auto">
            <div className="space-y-2 text-[1rem]">
              <span className="border py-1 px-2  rounded-lg flex">
                <Link href={""} target="_blank" className="flex line-clamp-1 text-[0.9rem]">
                  <Image
                    src="/github-mark.svg"
                    alt="github-logo"
                    width={16}
                    height={16}
                  />
                  <p className="pl-4">github link name</p>
                </Link>
              </span>
              <span className="border py-1 px-2 rounded-lg flex">
                <Link href={""} target="_blank" className="flex line-clamp-1 self-center text-[0.9rem]">
                    <FaHome size={18}/>
                    <p className="pl-4">Website Name</p>
                </Link>
              </span>
              <span className="border py-1 px-2 rounded-lg flex">
                <Link href={""} target="_blank" className="flex line-clamp-1 text-[0.9rem]">
                  <Image
                    src="/pypi.svg"
                    alt="pypi-logo"
                    width={20}
                    height={16}
                  />
                  <p className="pl-3">pypi link name</p>
                </Link>
              </span>
            </div>
        </div>
      </div>
  
  );
}
