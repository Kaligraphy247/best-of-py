// "use client"
import Select from "react-select";
import { useParams } from "next/navigation";
import { Modal } from "flowbite";

async function fetchProjectData(project_title: string) {
  let result = await fetch(
    `https://49m75b-8000.csb.app/api/get-project?project_title=${project_title}`
  );
  if (!result.ok) {
    throw new Error("Failed to Fetch Data");
  }
  let data = result.json();
  return data;
}

async function getTags() {
  let result = await fetch("https://49m75b-8000.csb.app/api/get-all-tags");
  if (!result.ok) {
    throw new Error("Failed to fetch Data");
    // more handling here
  }
  return result.json();
}

export default async function UpdateForm() {
  // get path param from url segment
  const params = useParams();

  // use params to fetch data from api
  const project: ProjectItem = await fetchProjectData(params.project);
  const tags: any = await getTags();

  // to get projects current options
  let currentTagOptions: any = [];
  project.tags?.forEach((element) => {
    let opts = { value: element.tag, label: element.tag };
    currentTagOptions.push(opts);
  });

  // to get all tags, which is used to populate Select `Tags`
  let tagOptions: any = [];

  
  tags.forEach((element: any) => {
    let opts = { value: element.tag, label: element.tag };
    tagOptions.push(opts);
  });

  return (
    <form className="w-full max-w-lg mx-auto">
      <h1 className="text-lg md:text-center pb-2 md:text-3xl font-medium md:mx-4 md:pb-4">
        Update project: <span className="font-mono">{params.project}</span>
      </h1>
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
            defaultValue={project.title}
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
            defaultValue={project.imageSrc}
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
            defaultValue={project.altText}
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
            defaultValue={project.githubUrl}
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
            defaultValue={project.projectWebsite}
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
            defaultValue={project.pypiUrl}
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
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="description"
            placeholder="Project description"
            defaultValue={project.description}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="current-tags"
          >
            Current Tags
          </label>
        </div>
        <div className="md:w-2/3">
          <Select
            defaultValue={[...currentTagOptions.slice(0, 3)]}
            isMulti
            name="current-tags"
            isDisabled
            // options={currentTagOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="current-tags"
          >
            Add more Tags
          </label>
        </div>
        <div className="md:w-2/3">
          <Select
            // defaultValue={[...currentTagOptions.slice(0, 3)]}
            isMulti
            name="tags"
            options={tagOptions}
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
            className="shadow bg-[#2b5a83] hover:bg-[#4a8eca] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Update Project
          </button>
        </div>
      </div>
    </form>
  );
}

interface ProjectItem {
  title: string;
  projectUrl: string;
  imageSrc: string;
  altText: string;
  githubUrl: string;
  projectWebsite: string;
  pypiUrl: string;
  description?: string;
  tags?:
    | {
        tag: string;
        tagUrl: string;
      }[]
    | undefined;
}
