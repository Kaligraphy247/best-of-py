import AddProjectForm from "@/components/add-project";
import { getXataClient } from "@/utils/xata";

async function getTags() {
  const xata = getXataClient();
  const tags = xata.db.tags.getAll()
  // console.log(tags) //! DEBUG
  return tags
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
        {/* @ts-expect-error Async Server Component */}
        <AddProjectForm options={tagOptions} />
      </div>
    </main>
  );
}
