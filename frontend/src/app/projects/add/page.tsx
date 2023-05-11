import AddProjectForm, { GetTokenComponent } from "@/components/add-project";

async function getTags() {
  let result = await fetch("https://49m75b-8000.csb.app/api/get-all-tags", {
    mode: "no-cors",
  });
  if (!result.ok) {
    throw new Error("Failed to fetch Data");
    // more handling here
    // console.log("Failed to fetch data")
  }
  return result.json();
}

export default async function AddProject() {
  const tags = await getTags();
  // to get all tags, which is used to populate Select `Tags`
  let tagOptions: any = [];
  tags.forEach((element: any) => {
    let opts = { value: element.tag, label: element.tag, url: element.tagUrl };
    tagOptions.push(opts);
  });

  return (
    <main className="bg-[#fcfcfc]">
      <div className="mx-4 mb-16 mt-8 rounded border p-2 md:mx-12 lg:mx-32 xl:mx-40">
        <GetTokenComponent />
        {/* @ts-expect-error Async Server Component */}
        <AddProjectForm options={tagOptions} />
      </div>
    </main>
  );
}
