import { Metadata, ResolvingMetadata } from "next";
import ProjectInfoSection from "@/components/project-info";
import ProjectGitHubSection from "@/components/project-github";
import ProjectPypiSection from "@/components/project-pypi";
import ProjectReadmeSection from "@/components/project-readme";


type ProjectMetadataProps = {
  params: { project: string };
  // optionally, searchParams props, for now.
  searchParams: { [key: string]: [string | string[] | undefined] };
};


// * Dynamically generated Metadata - head tag
export async function generateMetadata(
  { params, searchParams }: ProjectMetadataProps,
  // parent?: ResolvingMetadata
): Promise<Metadata> {
  // store route params
  const projectName = params.project;

  // fetch data, it will be cached and reused below
  // instead of making another query ??
  // todo fetch data

  return {
    title: `${projectName} | Best of Python`,
  };
}

export default function Project({
  params,
  searchParams,
}: ProjectMetadataProps ) {
  // console.log(params.project)
// export default function Project({Item}: ProjectProps) {



const example = [
  { tag: "GUI", tagUrl: "GUI-URL" },
  { tag: "Numpy", tagUrl: "Numpy-URL" },
  { tag: "Django", tagUrl: "Django-URL" },
];

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
    <main>
      <div className="border-l border-r border-t rounded mx-4 mt-8 mb-12 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div className="border-b">

          <ProjectInfoSection />
          <ProjectGitHubSection />
          <ProjectPypiSection />
          <ProjectReadmeSection />
          {/* <p>URL params?: {params.project}</p> */}
        </div>
      </div>
    </main>
  );
}
