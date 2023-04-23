import Image from "next/image";
import { HiOutlineStar } from "react-icons/hi";
import Link from "next/link";

type FeaturedProjectProps = {
  Item: {
    title: string;
    projectUrl: string;
    imageSrc: string;
    altText: string;
    githubStars: string | number;
    // projectWebsite: string;
    // pypiUrl: string;
    // description?: string;
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
// export default function FeaturedProjectItem({ Item }: FeaturedProjectProps) {
//   return (
//     <>
//       <li className="border-b border-dashed border-gray-300 flex mx-0 px-0 py-3 mb-0 shadow-sm drop-shadow-lg last:border-b-0">
//         {/* //* logo/image */}
//         {Item.imageSrc !== "" ||
//         undefined ||
//         Item.altText !== "" ||
//         undefined ? (
//           <Link
//             href={`/projects/${Item.projectUrl}`}
//             className="my-auto rounded"
//           >
//             <Image
//               src={Item.imageSrc}
//               alt={Item.altText}
//               width={44}
//               height={44}
//             />
//           </Link>
//         ) : (
//           <Link
//             href={`/projects/${Item.projectUrl}`}
//             className="my-auto rounded"
//           >
//             <Image
//               src="/pypi-large.svg"
//               alt="logo alt-text fallback"
//               width={44}
//               height={44}
//             />
//           </Link>
//         )}
//         <div className="self-center dark:text-white pl-4">
//           <section className="flex self-center space-x-2 text-[1.0rem] whitespace-nowrap">
//             {/* //* project name & url */}
//             {Item.projectUrl !== "" ||
//             undefined ||
//             Item.title !== "" ||
//             undefined ? (
//               <Link href={`/projects/${Item.projectUrl}`}>{Item.title}</Link>
//             ) : (
//               <Link href={""}>Name-of-Project</Link>
//             )}
//             <div className="self-center flex space-x-3">
//               {/* //* quick link for github, project home & pypi */}
//               {/* //* github */}
//               {Item.githubUrl !== "" || undefined ? (
//                 <span>
//                   <Link href={Item.githubUrl} target="_blank">
//                     <Image
//                       src="/github-mark.svg"
//                       alt="github-logo"
//                       width={16}
//                       height={16}
//                     />
//                   </Link>
//                 </span>
//               ) : (
//                 <></>
//               )}

//               {/* //* project website */}
//               {Item.projectWebsite !== "" || undefined ? (
//                 <span>
//                   <Link href={Item.projectWebsite} target="_blank">
//                     <FaHome />
//                   </Link>
//                 </span>
//               ) : (
//                 <></>
//               )}

//               {/* // * pypi url */}
//               {Item.pypiUrl !== "" || undefined ? (
//                 <span>
//                   <Link href={Item.pypiUrl} target="_blank">
//                     <Image
//                       src="/pypi.svg"
//                       alt="pypi-logo"
//                       width={16}
//                       height={16}
//                     />
//                   </Link>
//                 </span>
//               ) : (
//                 <></>
//               )}
//             </div>
//           </section>

//           {/* //* description */}
//           <div className="py-1">
//             {Item.description !== "" || undefined ? (
//               <p className="line-clamp-1 text-sm font-thin">
//                 {Item.description}
//               </p>
//             ) : (
//               <p className="line-clamp-1 text-sm font-thin">
//                 Fallback description
//               </p>
//             )}
//           </div>

//           {/* //* tags */}
//           <div>
//             <ul className="flex space-x-3">
//               {Item.tags?.length !== 0 || undefined ? (
//                 Item.tags?.map(({ tag, tagUrl }) => (
//                   <li
//                     className="border rounded shadow-sm hover:cursor-pointer px-3 py-1"
//                     key={tag}
//                   >
//                     <Link href={`/tags/${tagUrl}`}>{tag}</Link>
//                   </li>
//                 ))
//               ) : (
//                 <></>
//               )}
//             </ul>
//           </div>
//         </div>
//       </li>
//     </>
//   );
// }

export default function FeaturedProjectItem({ Item }: FeaturedProjectProps) {
  return (
    <>
      <div className="flex px-4 py-3 first:pt-0 mb-0 drop-shadow-sm border-b border-dashed lg:justify-center">
        {Item.imageSrc !== "" ||
        (undefined && Item.altText !== "") ||
        undefined ? (
          <Image
            src={Item.imageSrc}
            alt={Item.altText}
            width={40}
            height={40}
          />
        ) : (
          <Image src="/pypi-large.svg" alt="stuff" width={40} height={40} />
        )}
        <div className="self-center dark:text-white pl-4">
          <section className="flex self-center space-x-2 text-[1.0rem]">
            {Item.title !== "" ||
            (undefined && Item.projectUrl !== "") ||
            undefined ? (
              <Link
                href={Item.projectUrl}
                className="text-sm font-medium pb-0 line-clamp-1"
              >
                {Item.title}
              </Link>
            ) : (
              <Link href={""} className="text-sm font-medium pb-0 line-clamp-1">
                Name-of-Project
              </Link>
            )}
          </section>
          <div className="py-1 text-center">
            <div className="inline-flex">
              {Item.githubStars !== "" || undefined ? (
                <p className="pb-1">{Item.githubStars}&nbsp;&nbsp;</p>
              ) : (
                <p className="pb-1">&middot;&nbsp;&nbsp;</p>
              )}
              <span className="pt-0.5">
                <HiOutlineStar size={17} />
              </span>
            </div>
          </div>
          <div>
            <ul className="block space-y-2">
              {Item.tags?.length !== 0 || undefined ? (
                Item.tags?.map(({ tag, tagUrl }) => (
                  <li
                    className="border rounded shadow-sm px-2 py-1 text-sm text-center"
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
      </div>
    </>
  );
}
