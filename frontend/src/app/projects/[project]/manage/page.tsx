"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";
import UpdateForm from "@/components/upload-form";


async function getData() {
  try {
    let result = await fetch(
      "https://49m75b-8000.csb.app/api/get-project?project_title=tabulate",
      { method: "GET", mode: "no-cors", headers: {} }
    );
    // if (!result.ok) {
    //   throw new Error("Failed to Fetch Data");
    // }
    let data = result.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }

  // const res = await fetch(
  //   "https://49m75b-8000.csb.app/api/get-project?project_title=tabulate",
  //   { method: "GET", mode: "no-cors", headers: {} }
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // return res.json();
}


const tabItems = [
  /* @ts-expect-error Async Server Component */
  // { title: `Add`, content: "AddProject()" },
  { title: `Update`, content: <UpdateForm /> },
  { title: "Remove", content: "Remove Project" },
];

export default async function ({ params, searchParams }: any) {
  // console.log(params)
  const router = useRouter();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

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
      </div>
    </main>
  );
}


