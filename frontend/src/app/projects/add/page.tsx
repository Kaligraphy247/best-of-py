"use client";

import { FaGithub } from "react-icons/fa";
import { SiPypi } from "react-icons/si";
import Select from "react-select";

const tagOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function () {
  return (
    <main className="bg-[#fcfcfc]">
      <div className="mt-8 mx-4 md:mx-12 lg:mx-32 xl:mx-40">
        {/* <form className="border rounded shadow grid grid-flow-row">
          <label htmlFor="title">Title</label>
          <input type="text" name="" id="" className="border" />
          <label htmlFor="">Project Url</label>
          <input type="url" name="" id="" className="border" />
          <label htmlFor="imageSrc">Image Source</label>
          <input type="url" className="border" />
          <label htmlFor="altText">Alt Text</label>
          <input type="text" className="border" />
          <label htmlFor="githubUrl" className="flex">
            Github <FaGithub />
          </label>
          <input type="url" className="border" />
          <label htmlFor="projectWebsite">Website</label>
          <input type="url" className="border" />
          <label htmlFor="pypiUrl" className="flex">
            <SiPypi /> PyPI
          </label>
          <input type="text" className="border" />
          <label htmlFor="tags">Tags</label>

          <Select
            // defaultValue={[colourOptions[1]]}
            isMulti
            name="tags"
            options={tagOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <div><button type="submit" className="border">Add Project</button></div>
        </form> */}

        <div className="border mt-16">
          <form className="w-full max-w-lg">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="title"
                >
                  Title
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="title"
                  type="text"
                  placeholder="Project title"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="imageSrc"
                >
                  Image Source
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="imageSrc"
                  type="url"
                  placeholder="Image Link"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="altText"
                >
                  Alt Text
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="altText"
                  type="text"
                  placeholder="Image altText"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="githubUrl"
                >
                  Github
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="githubUrl"
                  type="url"
                  placeholder="Github Repo"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="projectWebsite"
                >
                  Website
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="projectWebsite"
                  type="url"
                  placeholder="Project Homepage"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="pypiUrl"
                >
                  PyPi
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="pypiUrl"
                  type="url"
                  placeholder="PyPi Link"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="description"
                >
                  Description
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="description"
                  type="text"
                  placeholder="Project description"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="tags"
                >
                  Tags
                </label>
              </div>
              <div className="md:w-2/3">
                <Select
                  // defaultValue={[colourOptions[1]]}
                  isMulti
                  name="tags"
                  options={tagOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  // className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  className="shadow bg-[#2b5a83] hover:bg-[#4a8eca] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Add Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
