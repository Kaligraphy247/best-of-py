import Link from "next/link";
import FeaturedProjectItem from "./featured-project-item";
import { getXataClient } from "@/utils/xata";

async function getData() {
  const xata = getXataClient();
  const result = xata.db.projects.getAll();
  return result;
}

/**
 * #### Featured Projects Component.
 *
 * Contains Featured Projects selected on certain criteria.
 */
export default async function FeaturedProjects() {
  const projects = await getData();
  // console.log(projects) //! DEBUG

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
      githubStars: 26,
      // projectWebsite: "",
      // pypiUrl: "https://pypi.org/project/schedule/",
      tags: example2,
    },
    // 2
    {
      title: "prettytable",
      projectUrl: "prettytable",
      imageSrc: "",
      altText: "",
      githubStars: 26,
      // projectWebsite: "",
      // pypiUrl: "https://pypi.org/project/schedule/",
      tags: example,
    },
    // 3
    {
      title: "tabulate",
      projectUrl: "tabulate",
      imageSrc: "",
      altText: "",
      githubStars: 26,
      // projectWebsite: "",
      // pypiUrl: "https://pypi.org/project/schedule/",
      tags: example2,
    },
    // 4
    {
      title: "texttable",
      projectUrl: "texttable",
      imageSrc: "",
      altText: "",
      githubStars: 26,
      // projectWebsite: "",
      // pypiUrl: "https://pypi.org/project/schedule/",
      tags: example,
    },
  ];

  const exx = [
    {
      altText: "",
      description: "the description for the 2nd one",
      githubUrl: "",
      id: "rec_chgujqpe0mklna6r259g",
      imageSrc: "https://picsum.photos/seed/picsum/44/44",
      projectUrl: "schedule",
      projectWebsite: "",
      pypiUrl: "https://pypi.org",
      title: "schedule",
      tags: null,
    },
    {
      altText: "",
      description: "This is the description of the first job",
      githubUrl: "",
      id: "rec_chh0klg4ooeu3j0jhvug",
      imageSrc: "",
      projectUrl: "loguru",
      projectWebsite: "",
      pypiUrl: "pypi.org",
      tags: ["one"],
      title: "Loguru",
    },
  ];


  return (
    <aside className="float-right hidden overflow-scroll rounded-[0.20rem] border p-0 md:block md:w-[23%] lg:w-[23%] xl:w-[23%] xl:min-w-[22%]">
      <ul className="last:border-red-500">
        {projects.map(({title, tags, imageSrc, altText}) => (
        <FeaturedProjectItem key={title} title={title} tags={tags}  altText={altText} imageSrc={imageSrc}/>
        ))}
      </ul>
      <div className="mt-2 border-t border-dotted py-1 text-center">
        <Link href={"/tags"} className="hover:underline">
          View more
        </Link>
        {<>&nbsp;&raquo;</>}
      </div>
    </aside>
  );
}
