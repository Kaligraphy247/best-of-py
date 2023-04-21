import { Metadata, ResolvingMetadata } from "next";
import CustomHeader from "@/app/components/header";
import CustomFooter from "@/app/components/footer";
import ProjectItem from "@/app/components/project-item";
import { FaHashtag } from "react-icons/fa";

type TagMetadataProps = {
  params: { tag: string };
  // optionally, searchParams props, for now.
  searchParams: { [key: string]: [string | string[] | undefined] };
};

// * Dynamically generated Metadata - head tag
export async function generateMetadata(
  { params, searchParams }: TagMetadataProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // store route params
  const tagName = params.tag;

  // fetch data, it will be cached and reused below
  // instead of making another query ??
  // todo fetch data

  return {
    title: `${tagName} · Tags | Best of Python`,
  };
}

export default function Tag({ params, searchParams }: TagMetadataProps) {
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
    <main>
      <CustomHeader />
      <div className="border mt-8 mx-4 mb-12 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        {/* <div className="border-b h-[920px]"> */}
          {/* <h1 className="text-2xl text-center">Tags</h1>
          <p>URL params?: {params.tag}</p> */}
        {/* </div> */}
        <ul className="">
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
