"use client";

import { useState } from "react";
import Select from "react-select";

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

export default async function AddProjectForm(props: any) {
  const [tagChoice, setTagChoice] = useState<any>();
  // console.log(tagChoice); //! DEBUG
  // console.log(props.options); //! DEBUG

  async function handleSubmit(event: any) {
    // prevent refresh on submit
    event.preventDefault();

    // How tags are saved in the db
    let cleanTags: any = [];
    try {
      tagChoice.forEach((element: any) => {
        cleanTags.push(element.value);
      });
    } catch (e) {}

    console.log("CLEAN Tag", cleanTags); //! DEBUG

    // Get data from form
    const data = {
      title: event.target.title.value,
      projectUrl: event.target.title.value,
      imageSrc:
        event.target.imageSrc.value === ""
          ? "/pypi-large.svg"
          : event.target.imageSrc.value,
      altText: event.target.altText.value,
      githubUrl: event.target.githubUrl.value,
      projectWebsite: event.target.projectWebsite.value,
      pypiUrl: event.target.pypiUrl.value,
      description: event.target.description.value,
      tags: cleanTags,
    };

    // stringify data
    const JSONdata = JSON.stringify(data);
    // console.log(JSONdata); //! DEBUG

    // API endpoint
    const endpoint = "/api/add-projects";
    // options
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (result.ok) {
      alert(`Project "${event.target.title.value}" has been saved.`);
    } else {
      alert(
        `Project "${event.target.title.value}" may have not been saved, please confirm before closing this page.`
      );
    }
  }

  return (
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
            options={props.options}
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
  );
}

export function GetTokenComponent() {
  return (
    <div className="mb-4 flex space-x-4 border-b py-2">
      <button
        className="w-40 rounded border px-3 py-1 hover:bg-gray-200 "
        type="button"
        onClick={() => {
          // fetchToken();
          console.log("I am working");
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
  );
}
