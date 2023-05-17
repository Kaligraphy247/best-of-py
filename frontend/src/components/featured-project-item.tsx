import Image from "next/image";
// import { HiOutlineStar } from "react-icons/hi";
import Link from "next/link";

type FeaturedProjectProps = {
  title: string;
  imageSrc?: string | undefined | null;
  altText?: string | undefined | null;
  tags?: string[] | null | undefined;
};

/**
 * #### Project Item
 * Renders a section for a single Project
 */
export default function FeaturedProjectItem({
  title,
  imageSrc,
  altText,
  tags,
}: FeaturedProjectProps) {
  return (
    <li>
      <div className="flex items-center justify-center border-b border-dashed py-2 last:border-b-0">
        <div className="grid">
          <div className="mx-auto rounded border p-0">
            {imageSrc !== null || imageSrc !== "" || imageSrc !== undefined ? (
              <Image
                src={imageSrc!}
                width={48}
                height={48}
                alt={altText!}
                className="aspect-square rounded drop-shadow-md"
              />
            ) : (
              <Image
                src={"/pypi-large.svg"}
                width={48}
                height={48}
                alt={"Default image alt-text"}
                className="aspect-square rounded"
              />
            )}
          </div>
          <div className="mx-auto">
            <Link
              href={`/projects/${title}`}
              className="line-clamp-1 py-[0.375rem] text-[15px] font-medium text-[#3877ab] hover:text-[#616161]"
            >
              {title}
            </Link>
          </div>
          <div className="mx-2 overflow-scroll">
            <ul className="flex space-x-2">
              {tags?.length !== 0 ? (
                tags?.map((tag) => (
                  <li className="rounded border px-2 py-1 text-center text-sm shadow-sm" key={tag}>
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
