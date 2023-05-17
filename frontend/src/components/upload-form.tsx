import Select from "react-select";
import { useParams } from "next/navigation";
import { useState } from "react";

async function getTags() {
  const res = await fetch("/api/get-tags");
  const result = await res.json();
  return result.tags;
}

async function getProjectData(title: string) {
  const res = await fetch(`/api/update-project/?title=${title}`);
  const result = await res.json();
  return result.data;
}

export default async function UpdateForm() {
  // get path param from url segment
  const params = useParams();
  const [value, setValue] = useState<any>()

  // use params to fetch data from api
  const project = await getProjectData(params.project);

  // get projects current options
  let currentTagOptions: any = [];
  project.tags?.forEach((element: any) => {
    let opts = { value: element, label: element };
    currentTagOptions.push(opts);
  });

  // to get all tags, which is used to populate Select `Tags`
  const tags: any = await getTags();
  let tagOptions: any = [];
  tags.forEach((element: any) => {
    let opts = { value: element.tag, label: element.tag };
    tagOptions.push(opts);
  });

  async function handleSubmit(event: any) {
    // prevent refresh on submit
    event.preventDefault();

    // How tags are saved in the db
    let cleanTags: any = [];
    try {
      value?.forEach((element: any) => {
        cleanTags.push(element.value);
      });
    } catch (e) {}

    // console.log("CLEAN Tag", cleanTags); //! DEBUG

    // Get data from form
    const data = {
      rec_id: project.id,
      data: {
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
      },
    };

    // stringify data
    const JSONdata = JSON.stringify(data);
    // console.log(JSONdata); //! DEBUG

    // API endpoint
    const endpoint = "/api/update-project";
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
      alert(`Project "${event.target.title.value}" has been updated.`);
    } else {
      alert(
        `Project "${event.target.title.value}" may have not been updated, please confirm before closing this page.`
      );
    }
  }

  return (
    <form className="mx-auto w-full max-w-lg" onSubmit={handleSubmit}>
      <h1 className="pb-2 text-lg font-medium md:mx-4 md:pb-4 md:text-center md:text-3xl">
        Update project: <span className="font-mono">{params.project}</span>
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
            id="title"
            type="text"
            placeholder="Project title"
            defaultValue={project.title}
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
            // type="url"
            placeholder="Image Link"
            defaultValue={project.imageSrc}
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
            defaultValue={project.altText}
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
            type="url"
            placeholder="Github Repo"
            defaultValue={project.githubUrl}
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
            type="url"
            placeholder="Project Homepage"
            defaultValue={project.projectWebsite}
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
            type="url"
            placeholder="PyPi Link"
            defaultValue={project.pypiUrl}
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
            placeholder="Project description"
            defaultValue={project.description}
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
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
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
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
            onChange={(value) => setValue(value)}
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
            Update Project
          </button>
        </div>
      </div>
    </form>
  );
}
