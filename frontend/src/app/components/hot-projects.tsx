import ProjectItem from "./project-item";

/**
 * #### Hot Projects Component
 *
 * Hot projects based on selected Criteria.
 */
export default function HotProjects() {
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
      tags: example2,
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
      tags: example2,
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
    // extra
    {
      title: "texttable2",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/foutaise/texttable/",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/texttable/",
      description: "Python module to create simple ASCII tables",
      tags: example,
    },
    {
      title: "texttable3",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/foutaise/texttable/",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/texttable/",
      description: "Python module to create simple ASCII tables",
      tags: example,
    },
    {
      title: "texttable4",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/foutaise/texttable/",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/texttable/",
      description: "Python module to create simple ASCII tables",
      tags: example,
    },
    {
      title: "texttable5",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/foutaise/texttable/",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/texttable/",
      description: "Python module to create simple ASCII tables",
      tags: example,
    },
    {
      title: "texttable6",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubUrl: "https://github.com/foutaise/texttable/",
      projectWebsite: "",
      pypiUrl: "https://pypi.org/project/texttable/",
      description: "Python module to create simple ASCII tables",
      tags: example,
    },
    {
      title: "texttable7",
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
    <section className="border mx-4 mb-8 p-0 rounded-[0.20rem] h-min md:w-[73%] md:h-min md:mb-48 lg:w-[72%] xl:w-[73.25%] xl:min-w-[25%]">
      <ul className="last:border-b-0 border-dashed">
        {data.map(
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
          }) => (
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
