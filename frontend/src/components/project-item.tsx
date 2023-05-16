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
    //   tags?:
    //     | {
    //         tag: string;
    //         tagUrl: string;
    //       }[]
    //     | undefined;
    // };
    tags?: string[] | null | undefined;
  };
};

/**
 * #### Project Item
 * Renders a section for a single Project
 */
export default function ProjectItem({ Item }: ProjectProps) {
  return (
    <>
      <li className="mx-0 mb-0 grid grid-cols-5 space-x-4 border-b border-dashed border-gray-300 px-3 py-4 shadow-sm drop-shadow-lg last:border-b-0 lg:grid-cols-12 lg:space-x-8">
        {/* //* logo/image */}
        <div className="mx-auto my-auto w-20 rounded border">
          {Item.imageSrc !== "" ||
          undefined ||
          Item.altText !== "" ||
          undefined ? (
            <Link
              href={`/projects/${Item.projectUrl}`}
              prefetch={false}
              className="mx-auto mb-4 mt-4 rounded"
            >
              <Image
                src={Item.imageSrc}
                alt={Item.altText}
                width={44}
                height={44}
                className="mx-auto my-3 rounded w-[48px] h-[48px]"
              />
            </Link>
          ) : (
            <Link
              href={`/projects/${Item.projectUrl}`}
              prefetch={false}
              className="my-auto rounded bg-red-500"
            >
              <Image
                src="/pypi-large.svg"
                alt="logo alt-text fallback"
                width={44}
                height={44}
                className="mx-auto mb-4 mt-4 rounded"
              />
            </Link>
          )}
        </div>

        {/* //* details */}
        <div className="col-span-4 self-center pl-4 dark:text-white lg:col-span-11">
          <section className="flex space-x-2 self-center whitespace-nowrap text-[1.0rem] font-medium">
            {/* //* project name & url */}
            {Item.projectUrl !== "" ||
            undefined ||
            Item.title !== "" ||
            undefined ? (
              <Link
                href={`/projects/${Item.projectUrl}`}
                prefetch={false}
                className="text-[#3877ab] hover:text-[#616161]"
              >
                {Item.title}
              </Link>
            ) : (
              <Link href={""} className="text-[#3877ab] hover:text-[#616161]">
                Name-of-Project
              </Link>
            )}
            <div className="flex space-x-3 self-center">
              {/* //* quick link for github, project home & pypi */}
              {/* //* github */}
              {Item.githubUrl !== "" || undefined ? (
                <span>
                  <Link href={Item.githubUrl} target="_blank" prefetch={false}>
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
                  <Link href={Item.projectWebsite} target="_blank" prefetch={false}>
                    <FaHome />
                  </Link>
                </span>
              ) : (
                <></>
              )}

              {/* // * pypi url */}
              {Item.pypiUrl !== "" || undefined ? (
                <span>
                  <Link href={Item.pypiUrl} target="_blank" prefetch={false}>
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
            {/* <ul className="flex space-x-3">
              {Item.tags?.length !== 0 || undefined ? (
                Item.tags?.map(({ tag, tagUrl }) => (
                  <li
                    className="rounded border px-3 py-1 shadow-sm hover:cursor-pointer"
                    key={tag}
                  >
                    <Link href={`/tags/${tagUrl}`}>{tag}</Link>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul> */}

            <ul className="flex space-x-3">
              {Item.tags?.length !== 0 || undefined || null ? (
                Item.tags?.map((tag) => (
                  
                  <li
                    className="rounded border px-3 py-1 shadow-sm hover:cursor-pointer"
                    key={tag}
                  >
                    <Link href={`/tags/${tag}`}>{tag}</Link>
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
