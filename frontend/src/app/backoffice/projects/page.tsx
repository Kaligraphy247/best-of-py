"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiPypi } from "react-icons/si";
import Select from "react-select";

const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const tabItems = [
  { title: `Add`, content: AddProject() },
  { title: "Update", content: "This is the content for Tab 3" },
  { title: "Remove", content: Simple() },
];

export default function () {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  // const router = useRouter();
  const path = usePathname();
  return (
    <main className="bg-[#fcfcfc]">
      <div className="mt-8 mx-4 md:mx-12 lg:mx-32 xl:mx-40">
        {/* TAB BEGINS */}
        <div className="border-b rounded shadow">
          {/* render tab header */}
          <div className="space-x-1">
            {tabItems.map((item, index: any) => (
              <button
                key={index}
                className={`py-1 px-3 mb-[0.03rem] ${
                  activeTabIndex === index
                    ? "border-b-0 bg-[#2b5a83] text-[#dadada] text-lg font-medium rounded-t-md"
                    : "bg-gray-200 text-lg font-medium rounded-t-md"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item.title}
              </button>
            ))}
            {/* // render the active tab content */}
            <div className="p-6 border-t border-gray-200">
              {tabItems[activeTabIndex].content}
            </div>
          </div>
        </div>
        {/* TAB ENDS */}
        <p>breadcrumb like stuff to navigate to backoffice</p>
      </div>
    </main>
  );
}

export function Simple() {
  return <>Simple Form</>;
}

function AddProject() {
  return (
    <form className="border rounded shadow grid grid-flow-row">
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
        defaultValue={[colourOptions[1]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </form>
  );
}
