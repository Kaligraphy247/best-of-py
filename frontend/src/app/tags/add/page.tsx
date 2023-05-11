import AddTagsForm from "@/components/add-tag";


/** Fetch all tags */
async function getTags() {
  let result = await fetch("https://49m75b-8000.csb.app/api/get-all-tags", {mode: "no-cors"});
  if (!result.ok) {
    throw new Error("Failed to fetch Data");
    // more handling here
  }
  return result.json();
}


export default async function AddTags() {
  const tags = await getTags()

  return (
    <main className="bg-[#fcfcfc]">
      <div className="mx-4 mb-16 mt-8 rounded border p-2 md:mx-12 lg:mx-32 xl:mx-40">
        {/* @ts-expect-error Async Server Component */}
        <AddTagsForm options={tags}/>
      </div>
    </main>
  );
}
