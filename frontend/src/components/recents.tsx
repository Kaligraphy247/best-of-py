import ProjectItem, { ProjectProps } from "./project-item";
import { getXataClient } from "@/utils/xata";

async function getData() {
  const xata = getXataClient();
  const project = await xata.db.projects.getAll();
  return project
}

/**
 * #### RecentlyAdded Component
 */
export default async function RecentlyAdded() {
  const project: any = await getData();

  const example = [
    { tag: "GUI", tagUrl: "GUI-URL" },
    { tag: "Numpy", tagUrl: "Numpy-URL" },
    { tag: "Django", tagUrl: "Django-URL" },
  ];
  const example2: any = [];

  const data = [
    {
      title: "schedule",
      projectUrl: "schedule",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/dbader/schedule",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/schedule/",
      description:
        "Python job scheduling for humans. Run Python functions (or any other callable) periodically using a friendly syntax.",
      tags: example2,
    },
    // 2
    {
      title: "prettytable",
      projectUrl: "prettytable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/jazzband/prettytable",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/prettytable/",
      description:
        "PrettyTable lets you print tables in an attractive ASCII form",
      tags: example,
    },
    // 3
    {
      title: "tabulate",
      projectUrl: "tabulate",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/astanin/python-tabulate",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/tabulate/",
      description:
        "Pretty-print tabular data in Python, a library and a command-line utility.",
      tags: example,
    },
    // 4
    {
      title: "texttable",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/foutaise/texttable/",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/texttable/",
      description: "Python module to create simple ASCII tables",
      tags: example,
    },
  ];
  return (
    <section className="border mx-4 mb-16 p-0 rounded-[0.20rem] h-min md:w-[73%] md:h-min lg:w-[72%] xl:w-[73.25%] xl:min-w-[25%]">
      <ul className="last:border-b-0 border-dashed">
        {project.map(
          ({
            title,
            projectUrl,
            imageSrc,
            altText,
            githubUrl,
            projectWebsite,
            pypiUrl,
            description,
            tags,
          }: ProjectProps["Item"]) => (
            <ProjectItem
              key={title}
              Item={{
                title,
                projectUrl,
                imageSrc,
                altText,
                githubUrl,
                projectWebsite,
                pypiUrl,
                description,
                tags,
              }}
            />
          )
        )}
      </ul>
    </section>
  );
}
