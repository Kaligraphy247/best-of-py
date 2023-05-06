"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const tabItems = [
  { title: "Tab 1", content: "This is the content for Tab 1" },
  { title: "Tab 2", content: "This is the content for Tab 2" },
  { title: "Tab 3", content: "This is the content for Tab 3" },
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
      <div className="border-b rounded shadow">
          {/* render tab header */}
          <div className="">
            {tabItems.map((item, index: any) => (
              <button
                key={index}
                className={`py-1 px-3 ${
                  activeTabIndex === index
                    ? "border-b-0 bg-[#2b5a83] text-[#dadada] text-lg font-medium rounded-t"
                    : "bg-gray-200 text-lg font-medium rounded-t-md"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item.title}
              </button>
            ))}
            {/* // render the active tab content */}
            <div className="p-4 border-t border-gray-200">
              {tabItems[activeTabIndex].content}
            </div>
          </div>
        </div>
      </div>
      <p>breadcrumb like stuff to navigate to backoffice</p>
    </main>
  );
}
