"use client";

import { useState } from "react";
import UpdateForm from "@/components/upload-form";
import RemoveProject from "@/components/remove-project";

const tabItems = [
  /* @ts-expect-error Async Server Component */
  { title: `Update`, content: <UpdateForm /> },
  /* @ts-expect-error Async Server Component */
  { title: "Remove", content: <RemoveProject /> },
];

export default async function ManageProject() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <main className="bg-[#fcfcfc]">
      <div className="mx-4 mb-16 mt-8 rounded border px-1 pt-1 md:mx-12 lg:mx-32 xl:mx-40">
        {/* TAB BEGINS */}
        <div className="border-t-0">
          {/* render tab header */}
          <div className="space-x-1">
            <div className="grid grid-cols-2 gap-2">
              {tabItems.map((item, index: any) => (
                <button
                  key={index}
                  className={`px-3 py-1 ${
                    activeTabIndex === index
                      ? "rounded border-b-0 bg-[#2b5a83] text-lg font-medium text-[#dadada]"
                      : "rounded bg-gray-200 text-lg font-medium"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            {/* // render the active tab content */}
            <div className="border-gray-200 p-6">
              {tabItems[activeTabIndex].content}
            </div>
          </div>
        </div>
        {/* TAB ENDS */}
      </div>
    </main>
  );
}