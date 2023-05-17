import { useParams } from "next/navigation";

async function getProjectData(title: string) {
  const res = await fetch(`/api/update-project/?title=${title}`);
  const result = await res.json();
  return result.data;
}



export default async function RemoveProject() {
  const params = useParams()

  const project = await getProjectData(params.project)
  // console.log(project) //! DEBUG

  async function handleSubmit(event: any) {
    event.preventDefault();
    const action = event.target.delete.value
    // console.log(action) //! DEBUG

    const JSONdata = JSON.stringify(project)

    const endpoint = "/api/remove-project"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    // actions depending on action
    if (action === "no") {
      alert("Not removed")
    } else {
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if (result.ok) {
        alert("Removed!")
      } else {
        alert("Nothing Happened")
      }
    }
  }

  return (
    <form className="mx-auto w-full max-w-lg" onSubmit={handleSubmit}>
      <h1 className="pb-2 text-lg font-medium md:mx-4 md:pb-4 md:text-center md:text-3xl">
        Remove project: <span className="font-mono">{params.project}</span>
      </h1>
      <h3 className="align-item flex justify-center text-[1.25rem]">
        Are you sure you want to delete this project?
      </h3>
      <div className="align-item flex justify-center space-x-2 text-lg">
        <label htmlFor="no">Yes</label>
        <input className="pl-0.5" type="radio" name="delete" id="" value="yes"/>
        <label htmlFor="no">No</label>
        <input className="pl-2" type="radio" name="delete" id="" value="no"/>
      </div>
      <div className="align-item mt-4 flex justify-center">
        <button
          className="focus:shadow-outline rounded bg-[#2b5a83] px-4 py-2 font-bold text-white shadow hover:bg-[#4a8eca] focus:outline-none"
          type="submit"
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
