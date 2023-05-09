import Link from "next/link";

/**
 * #### Tags Component
 * Tags found in /
 */
export default function Tags() {
  return (
    <aside className="float-right hidden rounded-[0.20rem] p-0 md:block md:h-[576px] md:w-[23%] lg:w-[24.5%] xl:w-[24.25%] xl:min-w-[23%]">
      <ul className="border border-dashed border-blue-300 last:border-b-0">
        <li className="mb-0 flex border-b border-dashed border-blue-300 px-0.5 py-2 shadow-sm drop-shadow-lg">
          <div className="self-center pl-4 dark:text-white">
            <section className="flex space-x-2 self-center text-[0.95rem]">
              <Link href={`/tags/GUI`} className="hover:underline">
                GUI
              </Link>
              <div className="flex space-x-3 self-center">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="mb-0 flex border-b border-dashed border-blue-300 px-0.5 py-2 shadow-sm drop-shadow-lg">
          <div className="self-center pl-4 dark:text-white">
            <section className="flex space-x-2 self-center text-[0.95rem]">
              <Link href={`/tags/Flask`} className="hover:underline">
                Flask
              </Link>
              <div className="flex space-x-3 self-center">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="mb-0 flex border-b border-dashed border-blue-300 px-0.5 py-2 shadow-sm drop-shadow-lg">
          <div className="self-center pl-4 dark:text-white">
            <section className="flex space-x-2 self-center text-[0.95rem]">
              <Link href={`/tags/GUI`} className="hover:underline">
                GUI
              </Link>
              <div className="flex space-x-3 self-center">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="mb-0 flex border-b border-dashed border-blue-300 px-0.5 py-2 shadow-sm drop-shadow-lg">
          <div className="self-center pl-4 dark:text-white">
            <section className="flex space-x-2 self-center text-[0.95rem]">
              <Link href={`/tags/Django`} className="hover:underline">
                Django
              </Link>
              <div className="flex space-x-3 self-center">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>

        <li className="mb-0 flex border-b border-dashed border-blue-300 px-0.5 py-2 shadow-sm drop-shadow-lg">
          <div className="self-center pl-4 dark:text-white">
            <section className="flex space-x-2 self-center text-[0.95rem]">
              <Link href={`/tags/GUI`} className="hover:underline">
                GUI
              </Link>
              <div className="flex space-x-3 self-center">
                <span>(1000 Projects)</span>
              </div>
            </section>
          </div>
        </li>
      </ul>
    </aside>
  );
}
