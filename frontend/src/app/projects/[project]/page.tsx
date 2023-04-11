import { Metadata, ResolvingMetadata } from "next";
import CustomFooter from "@/app/components/footer";
import CustomHeader from "@/app/components/header";

type ProjectMetadataProps = {
  params: { project: string };
  // optionally, searchParams props, for now.
  searchParams: { [key: string]: [string | string[] | undefined] };
};

// * Dynamically generated Metadata - head tag
export async function generateMetadata(
  { params, searchParams }: ProjectMetadataProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // store route params
  const projectName = params.project;

  // fetch data, it will be cached and reused below
  // instead of making another query ??
  // todo fetch data

  return {
    title: projectName,
  };
}

export default function Project({
  params,
  searchParams,
}: ProjectMetadataProps) {
  // console.log(params.project)
  return (
    <main>
      <CustomHeader />
      <div className="border mt-8 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div className="border-b h-[920px]">
          <h1 className="text-2xl text-center">Project</h1>
          <p>URL params?: {params.project}</p>
        </div>
        <CustomFooter />
      </div>
    </main>
  );
}
