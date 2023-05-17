import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata"

// initialize xata client
const xata = getXataClient();

export async function GET(request: Request) {
  // const {searchParams} = new URL(request.url)
  // const title = searchParams.get('title')
  // console.log(title) //! DEBUG

  let tags = await xata.db.tags.getAll()
  // console.log(projectData)
  return NextResponse.json({ tags })
}