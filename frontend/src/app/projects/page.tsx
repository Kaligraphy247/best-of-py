import CustomFooter from "../components/footer";
import CustomHeader from "../components/header";
import ProjectItem from "../components/project-item";

export default function Projects() {
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
    <main className="min-h-screen relative">
      <CustomHeader />
      <div className="mx-4 mt-8 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <ul className="border">
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
        <CustomFooter />
      </div>
    </main>
  );
}
