import CustomFooter from "../components/footer";
import CustomHeader from "../components/header";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { JsxElement } from "typescript";

type Tag = {
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

  return (
    <main className="min-h-screen relative">
      <CustomHeader />
      <div className="mt-8 mx-4 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div>
          <ul className="last:border-b border-dashed border-blue-300">
            {data.map(({ tag, tagUrl }: Tag) => (
              <li
                className="border-t border-l border-r border-blue-300 border-dashed flex px-2 py-3 mb-0 shadow-sm drop-shadow-lg"
                key={tag}
              >
                <div className="self-center dark:text-white pl-4">
                  <section className="flex self-center space-x-2 text-[1.0rem]">
                    <Link href={`/tags/${tagUrl}`} className="hover:underline">
                      {tag}
                    </Link>
                    <div className="self-center flex space-x-3">
                      <span>(1000 Projects)</span>
                    </div>
                  </section>
                </div>
              </li>
            ))}
            {/* <li className="border-t border-l border-r border-blue-300 border-dashed flex px-2 py-3 mb-0 shadow-sm drop-shadow-lg">
              <div className="self-center dark:text-white pl-4">
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={`/tags/GUI`} className="hover:underline">
                    GUI
                  </Link>
                  <div className="self-center flex space-x-3">
                    <span>(1000 Projects)</span>
                  </div>
                </section>
              </div>
            </li>
            <li className="border-t border-l border-r border-blue-300 border-dashed flex px-2 py-3 mb-0 shadow-sm drop-shadow-lg">
              <div className="self-center dark:text-white pl-4">
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={`/tags/Numpy`} className="hover:underline">
                    Numpy
                  </Link>
                  <div className="self-center flex space-x-3">
                    <span>(1000 Projects)</span>
                  </div>
                </section>
              </div>
            </li>
            <li className="border-t border-l border-r border-blue-300 border-dashed flex px-2 py-3 mb-0 shadow-sm drop-shadow-lg">
              <div className="self-center dark:text-white pl-4">
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={`/tags/Flask`} className="hover:underline">
                    Flask
                  </Link>
                  <div className="self-center flex space-x-3">
                    <span>(1000 Projects)</span>
                  </div>
                </section>
              </div>
            </li>
            <li className="border-t border-l border-r border-blue-300 border-dashed flex px-2 py-3 mb-0 shadow-sm drop-shadow-lg">
              <div className="self-center dark:text-white pl-4">
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={`/tags/Django`} className="hover:underline">
                    Django
                  </Link>
                  <div className="self-center flex space-x-3">
                    <span>(1000 Projects)</span>
                  </div>
                </section>
              </div>
            </li> */}
          </ul>
        </div>
        <CustomFooter />
      </div>
    </main>
  );
}
