"use client";

import { useState, useEffect, useMemo, useRef } from "react";
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


let defaultOptions: Option[] = [];

export default async function AddTagsForm(props: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();
  // console.log(props.options); //! DEBUG

  useEffect(() => {
    const newOptions = props.options.map((item: TagType) =>
      createOption(item.tag)
    );
    setOptions(newOptions);
  }, [props.options]);

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    const newOption = createOption(inputValue);
    setIsLoading(false);
    setOptions((prev: any) => [...prev, newOption]);
    setValue(newOption);
  };

  const handleClick = async (event: any) => {
    event?.preventDefault();
    // console.log(value) //! DEBUG
    const toSave = { tag: value?.label, tagUrl: value?.value };
    const JSONData = JSON.stringify(toSave);
    // console.log(JSONData) //! DEBUG
    const endpoint = "/api/add-tags";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result); //! DEBUG
    if (!result.ok) {
      // todo handle errors
      alert("Was not saved!");
    } else {
      //? if everything  worked find, handle it here
      alert("Saved!");
    }
  };

  return (
    <form>
      <h1 className="pb-2 text-lg font-medium md:mx-4 md:pb-4 md:text-center md:text-3xl">
        Add a new Tag
      </h1>
      {/* <div className="mb-4 flex space-x-4 border-b py-2">
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
      </div> */}
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
            // type="submit"
            type="button"
            onClick={handleClick}
          >
            Add Tag
          </button>
        </div>
      </div>
    </form>
  );
}
