import Link from "next/link";

/**
 * #### Tags Component
 * Tags found in /
 */
export default function Tags() {
  return (
    <aside className="float-right p-0 rounded-[0.20rem] hidden md:block md:w-[23%] md:h-[576px] lg:w-[24.5%] xl:w-[24.25%] xl:min-w-[23%]">
      <ul className="border last:border-b-0 border-dashed border-blue-300">
      <li className="border-b border-blue-300 border-dashed flex px-0.5 py-2 mb-0 shadow-sm drop-shadow-lg">
          <div className="self-center dark:text-white pl-4">
            <section className="flex self-center space-x-2 text-[0.95rem]">
              <Link href={`/tags/GUI`} className="hover:underline">
                GUI
              </Link>
              <div className="self-center flex space-x-3">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="border-b border-blue-300 border-dashed flex px-0.5 py-2 mb-0 shadow-sm drop-shadow-lg">
          <div className="self-center dark:text-white pl-4">
            <section className="flex self-center space-x-2 text-[0.95rem]">
            <Link href={`/tags/Flask`} className="hover:underline">
                Flask
              </Link>
              <div className="self-center flex space-x-3">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="border-b border-blue-300 border-dashed flex px-0.5 py-2 mb-0 shadow-sm drop-shadow-lg">
          <div className="self-center dark:text-white pl-4">
            <section className="flex self-center space-x-2 text-[0.95rem]">
              <Link href={`/tags/GUI`} className="hover:underline">
                GUI
              </Link>
              <div className="self-center flex space-x-3">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="border-b border-blue-300 border-dashed flex px-0.5 py-2 mb-0 shadow-sm drop-shadow-lg">
          <div className="self-center dark:text-white pl-4">
            <section className="flex self-center space-x-2 text-[0.95rem]">
            <Link href={`/tags/Django`} className="hover:underline">
                Django
              </Link>
              <div className="self-center flex space-x-3">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="border-b border-blue-300 border-dashed flex px-0.5 py-2 mb-0 shadow-sm drop-shadow-lg">
          <div className="self-center dark:text-white pl-4">
            <section className="flex self-center space-x-2 text-[0.95rem]">
              <Link href={`/tags/GUI`} className="hover:underline">
                GUI
              </Link>
              <div className="self-center flex space-x-3">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>
      </ul>
    </aside>
  );
}
