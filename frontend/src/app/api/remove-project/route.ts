import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata"

// initialize xata client
const xata = getXataClient();

export async function POST(request: Request) {
  const body = await request.json();
  // console.log(body) //! DEBUG
  const { id } = body

  // Xata accepts JSON Objects, so nothing special to do here.
  const record = await xata.db.projects.delete(id)
  // console.log(record) //! DEBUG
  return NextResponse.json({ ok: "OK" })
}
