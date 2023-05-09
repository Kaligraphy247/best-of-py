import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export type ProjectProps = {
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

/**
 * #### Project Item
 * Renders a section for a single Project
 */
export default function ProjectItem({ Item }: ProjectProps) {
  return (
    <>
      <li className="border-b border-dashed border-gray-300 grid grid-cols-5 lg:grid-cols-12 space-x-4 lg:space-x-8 mx-0 px-3 py-4 mb-0 shadow-sm drop-shadow-lg last:border-b-0">
        {/* //* logo/image */}
        <div className="border rounded my-auto mx-auto w-20">
          {Item.imageSrc !== "" ||
          undefined ||
          Item.altText !== "" ||
          undefined ? (
            <Link
              href={`/projects/${Item.projectUrl}`}
              className="mx-auto mt-4 mb-4 rounded"
            >
              <Image
                src={Item.imageSrc}
                alt={Item.altText}
                width={44}
                height={44}
                className="mx-auto mt-4 mb-4 rounded"
              />
            </Link>
          ) : (
            <Link
              href={`/projects/${Item.projectUrl}`}
              className="my-auto rounded bg-red-500"
            >
              <Image
                src="/pypi-large.svg"
                alt="logo alt-text fallback"
                width={44}
                height={44}
                className="mx-auto mt-4 mb-4 rounded"
              />
            </Link>
          )}
        </div>

        {/* //* details */}
        <div className="self-center dark:text-white pl-4 col-span-4 lg:col-span-11">
          <section className="flex self-center space-x-2 text-[1.0rem] font-medium whitespace-nowrap">
            {/* //* project name & url */}
            {Item.projectUrl !== "" ||
            undefined ||
            Item.title !== "" ||
            undefined ? (
              <Link href={`/projects/${Item.projectUrl}`} className="text-[#3877ab] hover:text-[#616161]">{Item.title}</Link>
            ) : (
              <Link href={""} className="text-[#3877ab] hover:text-[#616161]">Name-of-Project</Link>
            )}
            <div className="self-center flex space-x-3">
              {/* //* quick link for github, project home & pypi */}
              {/* //* github */}
              {Item.githubUrl !== "" || undefined ? (
                <span>
                  <Link href={Item.githubUrl} target="_blank">
                    <Image
                      src="/github-mark.svg"
                      alt="github-logo"
                      width={16}
                      height={16}
                    />
                  </Link>
                </span>
              ) : (
                <></>
              )}

              {/* //* project website */}
              {Item.projectWebsite !== "" || undefined ? (
                <span>
                  <Link href={Item.projectWebsite} target="_blank">
                    <FaHome />
                  </Link>
                </span>
              ) : (
                <></>
              )}

              {/* // * pypi url */}
              {Item.pypiUrl !== "" || undefined ? (
                <span>
                  <Link href={Item.pypiUrl} target="_blank">
                    <Image
                      src="/pypi.svg"
                      alt="pypi-logo"
                      width={16}
                      height={16}
                    />
                  </Link>
                </span>
              ) : (
                <></>
              )}
            </div>
          </section>

          {/* //* description */}
          <div className="py-1">
            {Item.description !== "" || undefined ? (
              <p className="line-clamp-1 text-[0.8rem] italic">
                {Item.description}
              </p>
            ) : (
              <p className="line-clamp-1 text-[0.8rem] italic">
                Fallback description
              </p>
            )}
          </div>

          {/* //* tags */}
          <div>
            <ul className="flex space-x-3">
              {Item.tags?.length !== 0 || undefined ? (
                Item.tags?.map(({ tag, tagUrl }) => (
                  <li
                    className="border rounded shadow-sm hover:cursor-pointer px-3 py-1"
                    key={tag}
                  >
                    <Link href={`/tags/${tagUrl}`}>{tag}</Link>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}
