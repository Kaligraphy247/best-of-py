"use client";

import { useState } from "react";
import UpdateForm from "@/components/upload-form";

const tabItems = [
  /* @ts-expect-error Async Server Component */
  { title: `Update`, content: <UpdateForm /> },
  { title: "Remove", content: "Remove Project" },
];

export default async function ManageProject() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <main className="bg-[#fcfcfc]">
      <div className="mt-8 mx-4 md:mx-12 lg:mx-32 xl:mx-40 border pt-1 px-1 rounded mb-16">
        {/* TAB BEGINS */}
        <div className="border-t-0">
          {/* render tab header */}
          <div className="space-x-1">
            <div className="grid grid-cols-2 gap-2">
              {tabItems.map((item, index: any) => (
                <button
                  key={index}
                  className={`py-1 px-3 ${
                    activeTabIndex === index
                      ? "border-b-0 bg-[#2b5a83] text-[#dadada] text-lg font-medium rounded"
                      : "bg-gray-200 text-lg font-medium rounded"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            {/* // render the active tab content */}
            <div className="p-6 border-gray-200">
              {tabItems[activeTabIndex].content}
            </div>
          </div>
        </div>
        {/* TAB ENDS */}
      </div>
    </main>
  );
}
