import CustomFooter from "../components/footer";
import CustomHeader from "../components/header";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Tags(): JSX.Element {
  return (
    <main className="min-h-screen relative">
      <CustomHeader />
      <div className="mt-8 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div>
          <ul className="">
            <li className="border border-blue-300 flex px-2 py-6 mb-4 shadow-sm drop-shadow-lg">
              <Image src="/pypi-large.svg" alt="stuff" width={32} height={32} />
              <div className="self-center dark:text-white pl-4">
                {/*whitespace-nowrap */}
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={""}>Name-of-Project</Link>
                  <div className="self-center flex space-x-3">
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/github-mark.svg"
                          alt="github-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <FaHome />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/pypi.svg"
                          alt="pypi-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      {/* <Link href="" target="_blank"> */}
                      {/* <FaStar /> */}
                      {/* </Link> */}
                    </span>
                  </div>
                </section>
                <div className="py-1">
                  <p className="line-clamp-1 text-sm font-thin ">
                    the description of something and other things Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Obcaecati sint
                    id consectetur pariatur nam ad Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque aliquid laborum,
                    dolor
                  </p>
                </div>
                <div>
                  <ul className="flex space-x-2">
                    <li className="border rounded shadow-sm px-3 py-1">GUI</li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Numpy
                    </li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Django
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="border border-blue-300 flex px-2 py-6 mb-4 shadow-sm drop-shadow-lg">
              <Image src="/pypi-large.svg" alt="stuff" width={32} height={32} />
              <div className="self-center dark:text-white pl-4">
                {/*whitespace-nowrap */}
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={""}>Name-of-Project</Link>
                  <div className="self-center flex space-x-3">
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/github-mark.svg"
                          alt="github-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <FaHome />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/pypi.svg"
                          alt="pypi-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      {/* <Link href="" target="_blank"> */}
                      {/* <FaStar /> */}
                      {/* </Link> */}
                    </span>
                  </div>
                </section>
                <div className="py-1">
                  <p className="line-clamp-1 text-sm font-thin ">
                    the description of something and other things Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Obcaecati sint
                    id consectetur pariatur nam ad Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque aliquid laborum,
                    dolor
                  </p>
                </div>
                <div>
                  <ul className="flex space-x-2">
                    <li className="border rounded shadow-sm px-3 py-1">GUI</li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Numpy
                    </li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Django
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="border border-blue-300 flex px-2 py-6 mb-4 shadow-sm drop-shadow-lg">
              <Image src="/pypi-large.svg" alt="stuff" width={32} height={32} />
              <div className="self-center dark:text-white pl-4">
                {/*whitespace-nowrap */}
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={""}>Name-of-Project</Link>
                  <div className="self-center flex space-x-3">
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/github-mark.svg"
                          alt="github-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <FaHome />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/pypi.svg"
                          alt="pypi-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      {/* <Link href="" target="_blank"> */}
                      {/* <FaStar /> */}
                      {/* </Link> */}
                    </span>
                  </div>
                </section>
                <div className="py-1">
                  <p className="line-clamp-1 text-sm font-thin ">
                    the description of something and other things Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Obcaecati sint
                    id consectetur pariatur nam ad Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque aliquid laborum,
                    dolor
                  </p>
                </div>
                <div>
                  <ul className="flex space-x-2">
                    <li className="border rounded shadow-sm px-3 py-1">GUI</li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Numpy
                    </li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Django
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="border border-blue-300 flex px-2 py-6 mb-4 shadow-sm drop-shadow-lg">
              <Image src="/pypi-large.svg" alt="stuff" width={32} height={32} />
              <div className="self-center dark:text-white pl-4">
                {/*whitespace-nowrap */}
                <section className="flex self-center space-x-2 text-[1.0rem]">
                  <Link href={""}>Name-of-Project</Link>
                  <div className="self-center flex space-x-3">
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/github-mark.svg"
                          alt="github-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <FaHome />
                      </Link>
                    </span>
                    <span>
                      <Link href="" target="_blank">
                        <Image
                          src="/pypi.svg"
                          alt="pypi-logo"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </span>
                    <span>
                      {/* <Link href="" target="_blank"> */}
                      {/* <FaStar /> */}
                      {/* </Link> */}
                    </span>
                  </div>
                </section>
                <div className="py-1">
                  <p className="line-clamp-1 text-sm font-thin ">
                    the description of something and other things Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Obcaecati sint
                    id consectetur pariatur nam ad Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque aliquid laborum,
                    dolor
                  </p>
                </div>
                <div>
                  <ul className="flex space-x-2">
                    <li className="border rounded shadow-sm px-3 py-1">GUI</li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Numpy
                    </li>
                    <li className="border rounded shadow-sm px-3 py-1">
                      Django
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <CustomFooter />
      </div>
    </main>
  );
}
