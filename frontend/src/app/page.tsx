"use client";
import Image from "next/image";
import CustomHeader from "./components/header";
import HotProjects from "./components/hot-projects";
import FeaturedProjects from "./components/featured";
import RecentlyAdded from "./components/recents";
import Tags from "./components/tags";
import CustomFooter from "./components/footer";

export default function Home() {
  return (
    <main>
      {/* className="min-h-screen relative" */}
      <CustomHeader />
      <div className="mt-8 md:mx-12 lg:mx-32 xl:mx-40 bg-gray-50">
        <div>
          <h1 className="border float-right p-1 rounded-[0.20rem] hidden md:bg-green-500 md:block md:w-[23%] lg:bg-red-500 lg:w-[23%] xl:bg-purple-500 xl:w-[23%] xl:min-w-[22%] text-lg">
            Featured Projects
          </h1>
          <h1 className="border mx-4 mb-4 p-1 rounded-[0.20rem] md:bg-green-500 md:w-[73%] lg:bg-red-500 lg:w-[72%] xl:bg-purple-500 xl:w-[73.25%] xl:min-w-[25%] text-lg text-center">
            Some of the best projects Python has to offer
          </h1>
        </div>
        {/* <h1 className='text-2xl pl-2 my-3 md:ml-8 md:text-center'>Some of the best projects Python has to offer</h1> */}
        <FeaturedProjects />
        <HotProjects />
        <div>
          <h1 className="border float-right p-1 rounded-[0.20rem] hidden md:bg-green-500 md:block md:w-[23%] lg:bg-red-500 lg:w-[24.5%] xl:bg-purple-500 xl:w-[24.25%] xl:min-w-[23%] text-lg">
            Tags
          </h1>
          <h1 className="border mx-4 mb-4 p-1 rounded-[0.20rem] md:bg-green-500 md:w-[73%] lg:bg-red-500 lg:w-[72%] xl:bg-purple-500 xl:w-[73.25%] xl:min-w-[25%] text-lg pl-3">
            Recently Added
          </h1>
        </div>
        <Tags />
        <RecentlyAdded />
        <CustomFooter />
      </div>
    </main>
  );
}
