import Link from "next/link";
import FeaturedProjectItem from "./featured-project-item";

/**
 * #### Featured Projects Component.
 *
 * Contains Featured Projects selected on certain criteria.
 */
export default function FeaturedProjects() {
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
  return (
    <aside className="border overflow-scroll float-right p-2 px-0 rounded-[0.20rem] hidden md:block md:w-[23%] md:h-[576px] lg:w-[23%] xl:w-[23%] xl:min-w-[22%]">
      <ul>
        {data.map(
          ({ title, projectUrl, imageSrc, altText, githubStars, tags }) => (
            <FeaturedProjectItem
              key={title}
              Item={{ title, projectUrl, altText, githubStars, imageSrc, tags }}
            />
          )
        )}
      </ul>
      <div className="border-l-0 border-r-0 text-center py-0 mt-2">
        <Link href={"/tags"} className="hover:underline">View more</Link>
        {<>&raquo;</>}
      </div>
    </aside>
  );
}
