import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata"

// initialize xata client
const xata = getXataClient();

export async function GET(request?: Request) {
  const projects = await xata.db.projects.getAll()
  // console.log(projects)  //! DEBUG
  return NextResponse.json({ projects })
}