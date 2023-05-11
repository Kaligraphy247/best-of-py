import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export type TagType = {
  tag: string;
  tagUrl: string;
};

async function getData() {
  const res = await fetch("https://49m75b-8000.csb.app/api/get-all-tags");

  // Handle errors
  if (!res.ok) {
    throw new Error("Failed to Fetch Data");
  }
  // return res regardless
  return res.json();
}

export default async function Tags() {
  const data = await getData();
  // const data = allTags()

  return (
    <main className="min-h-screen relative">
      <div className="mt-8 mx-4 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div>
          <ul className="last:border-b border-dashed border-blue-300">
            {data.map(({ tag, tagUrl }: TagType) => (
              <li
                className="border-t border-l border-r border-blue-300 border-dashed flex px-2 py-3 mb-0 shadow-sm drop-shadow-lg"
                key={tag}
              >
                <div className="self-center dark:text-white pl-4">
                  <section className="flex self-center space-x-2 text-[1.0rem]">
                    <Link href={`/tags/${tagUrl}`} prefetch={false} className="hover:underline">
                      {tag}
                    </Link>
                    <div className="self-center flex space-x-3">
                      <span>(1000 Projects)</span>
                    </div>
                  </section>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
