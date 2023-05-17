import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata"

// initialize xata client
const xata = getXataClient();

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const title = searchParams.get('title')
  // console.log(title) //! DEBUG

  let projectData = await xata.db.projects.filter({ "title": title! }).getFirst()
  // console.log(projectData) //! DEBUG
  return NextResponse.json({ data: projectData })
}

export async function POST(request: Request) {
  const body = await request.json();
  const {rec_id, data} = body
  // console.log(body) //! DEBUG

  // Xata accepts JSON Objects, so nothing special to do here.
  const record = await xata.db.projects.update(rec_id, data)
  // console.log(record) //! DEBUG
  return NextResponse.json({ ok: "OK" })
}
