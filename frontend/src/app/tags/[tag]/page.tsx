import { Metadata, ResolvingMetadata } from "next";
import CustomHeader from "@/app/components/header";
import CustomFooter from "@/app/components/footer";

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
    title: tagName,
  };
}

export default function Tag({ params, searchParams }: TagMetadataProps) {
  return (
    <main>
      <CustomHeader />
      <div className="border mt-8 md:mx-12 lg:mx-40 xl:mx-72 bg-gray-50">
        <div className="border-b h-[920px]">
          <h1 className="text-2xl text-center">Tags</h1>
          <p>URL params?: {params.tag}</p>
        </div>
        <CustomFooter />
      </div>
    </main>
  );
}
