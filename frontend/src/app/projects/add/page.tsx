"use client";

import { useState } from "react";
import Select from "react-select";

async function getTags() {
  let result = await fetch("https://49m75b-8000.csb.app/api/get-all-tags", {mode: "no-cors"});
  if (!result.ok) {
    throw new Error("Failed to fetch Data");
    // more handling here
  }
  return result.json();
}

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

export default async function AddProject() {
  const [tagChoice, setTagChoice] = useState<any>();

  const tags = await getTags();
  // to get all tags, which is used to populate Select `Tags`
  let tagOptions: any = [];
  tags.forEach((element: any) => {
    let opts = { value: element.tag, label: element.tag, url: element.tagUrl };
    tagOptions.push(opts);
  });

  async function handleSubmit(event: any) {
    // prevent refresh on submit
    event.preventDefault();

    let tokenPrompt = prompt("Enter Token");

    // How tags are saved in the db
    let cleanTags: any = [];

    try {
      tagChoice.forEach((element: any) => {
        let opts = { tag: element.value, tagUrl: element.url };
        cleanTags.push(opts);
      });
    } catch (e) {}

    // Get data from form
    const data = {
      title: event.target.title.value,
      projectUrl: event.target.title.value,
      imageSrc: event.target.imageSrc.value,
      altText: event.target.altText.value,
      githubUrl: event.target.githubUrl.value,
      projectWebsite: event.target.projectWebsite.value,
      pypiUrl: event.target.pypiUrl.value,
      description: event.target.description.value,
      tags: cleanTags,
    };

    // stringify data
    const JSONdata = JSON.stringify(data);

    // API endpoint
    const endpoint = "https://49m75b-8000.csb.app/api/add-project";

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
      alert(`Project "${event.target.title.value}" has been saved.`);
    } else {
      alert(
        `Project "${event.target.title.value}" may have not been saved, please confirm before closing this page.`
      );
    }
  }

  return (
    <main className="bg-[#fcfcfc]">
      <div className="mx-4 mb-16 mt-8 rounded border p-2 md:mx-12 lg:mx-32 xl:mx-40">
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
        <form className="w-full max-w-lg md:mx-20" onSubmit={handleSubmit}>
          <h1 className="pb-2 text-lg font-medium md:mx-4 md:pb-4 md:text-center md:text-3xl">
            Add a new Project
          </h1>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="title"
              >
                Title
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                defaultValue={"Loguru"}
                id="title"
                name="title"
                type="text"
                placeholder="Project title"
                required
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="imageSrc"
              >
                Image Source
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="imageSrc"
                name="imageSrc"
                type="url"
                placeholder="Image Link"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="altText"
              >
                Alt Text
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="altText"
                type="text"
                placeholder="Image altText"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="githubUrl"
              >
                Github
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="githubUrl"
                name="githubUrl"
                type="url"
                placeholder="Github Repo"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="projectWebsite"
              >
                Website
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="projectWebsite"
                name="projectWebsite"
                type="url"
                placeholder="Project Homepage"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="pypiUrl"
              >
                PyPi
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="pypiUrl"
                name="pypiUrl"
                type="url"
                placeholder="PyPi Link"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                htmlFor="description"
              >
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="description"
                name="description"
                placeholder="Project description"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
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
                onChange={(choice) => setTagChoice(choice)}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                // className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                className="focus:shadow-outline rounded bg-[#2b5a83] px-4 py-2 font-bold text-white shadow hover:bg-[#4a8eca] focus:outline-none"
                type="submit"
              >
                Add Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
