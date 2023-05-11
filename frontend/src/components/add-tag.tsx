"use client";

import { useState, useMemo, useRef } from "react";
import CreatableSelect from "react-select/creatable";
import { TagType } from "@/app/tags/page";

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

// async function getTags() {
//   let result = await fetch("https://49m75b-8000.csb.app/api/get-all-tags", {mode: "no-cors"});
//   if (!result.ok) {
//     throw new Error("Failed to fetch Data");
//     // more handling here
//   }
//   return result.json();
// }

/** Gets Bearer token, if user exists and credentials match */
async function getBearerToken(username: string, password: string) {
  const endpoint = "https://49m75b-8000.csb.app/token";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `username=${username}&password=${password}`,
  };
  const response = await fetch(endpoint, options);
  const result = await response.json();
  return result;
}

async function fetchToken() {
  let t = document.getElementById("bearer-token") as HTMLInputElement | null;
  let loginPrompt = prompt("Enter your username and password");
  const [username, password]: Array<string | undefined> =
    loginPrompt?.split("::")!;
  let bearerToken = await getBearerToken(username, password);
  if (bearerToken.access_token) {
    t!.value = bearerToken.access_token;
  } else {
    t!.value = "Not Authenticated.";
  }
}

let defaultOptions: Option[] = [];

export default async function AddTagsForm(props: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();
  // console.log(props.options); //! DEBUG
  props.options.forEach((element: TagType) => {
    defaultOptions.push(createOption(element.tag));
  });
  
  // console.log(defaultOptions)

  // const seen = new Set()
  // const unique = defaultOptions.filter((item) => {
  //   const duplicate = seen.has(item.value)
  //   seen.add(item.value)
  //   return !duplicate
  // })

  // console.log("Unique:", unique)
  // // defaultOptions = unique


  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    const newOption = createOption(inputValue);
    setIsLoading(false);
    setOptions((prev: any) => [...prev, newOption]);
    setValue(newOption);
  };

  const handleSubmit = async (event: any) => {
    // prevent refresh on submit
    event.preventDefault();

    let tokenPrompt = prompt("Enter Token");

    // How tags are saved in the db
    let cleanTags: {} = { tag: value?.label, tagUrl: value?.value };

    // stringify data
    const JSONdata = JSON.stringify(cleanTags);

    // API endpoint
    const endpoint = "https://49m75b-8000.csb.app/api/add-tag";

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenPrompt}`,
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    if (result.Ok) {
      alert(`Tag "${value?.label}" has been saved.`);
    } else {
      alert(
        `Tag "${value?.label}" may have not been saved, please confirm before closing this page.`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="pb-2 text-lg font-medium md:mx-4 md:pb-4 md:text-center md:text-3xl">
        Add a new Tag
      </h1>
      <div className="mb-4 flex space-x-4 border-b py-2">
        <button
          className="w-40 rounded border px-3 py-1 hover:bg-gray-200 "
          type="button"
          onClick={() => {
            fetchToken();
          }}
        >
          Get Token
        </button>
        <input
          type="text"
          className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          placeholder="Token will appear here"
          readOnly
          id="bearer-token"
        />
      </div>
      <div>
        <CreatableSelect
          isClearable
          isDisabled={isLoading}
          onChange={(newValue) => setValue(newValue)}
          onCreateOption={handleCreate}
          options={options}
          value={value}
        />
        <div className="pt-2 text-center">
          <button
            className="focus:shadow-outline rounded bg-[#2b5a83] px-4 py-2 font-bold text-white shadow hover:bg-[#4a8eca] focus:outline-none"
            type="submit"
          >
            Add Tag
          </button>
        </div>
      </div>
    </form>
  );
}
