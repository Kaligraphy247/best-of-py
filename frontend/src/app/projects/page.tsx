import ProjectItem from "../../components/project-item";
import { ProjectProps } from "../../components/project-item";
import { getXataClient } from "@/utils/xata";

async function getData() {
  const xata = getXataClient();
  const res = await xata.db.projects.getAll();
  return res;
}

export default async function Projects() {
  const projects: any = await getData();
  // console.log(projects)

  const example = [
    { tag: "GUI", tagUrl: "GUI-URL" },
    { tag: "Numpy", tagUrl: "Numpy-URL" },
    { tag: "Django", tagUrl: "Django-URL" },
  ];
  const example2: any = [];

  const data1 = [
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
      tags: example,
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
    <main className="relative min-h-screen">
      <div className="mx-4 mb-16 mt-8 bg-gray-50 md:mx-24 lg:mx-40 xl:mx-72">
        <ul className="border">
          {projects.map(
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
      </div>
    </main>
  );
}
