import { NextResponse } from "next/server"
import { getXataClient } from "@/utils/xata"

export async function GET(request: Request) {
    return NextResponse.json({nice: "All good"})
  }
  
  export async function POST(request: Request) {
    const xata = getXataClient();
    const body = await request.json();
    // console.log(body) //! DEBUG

    // Xata accepts JSON Objects, so nothing special to do here.
    const tag = await xata.db.projects.create(body)
    // console.log(tag) //! DEBUG

    // console.log("API request", body) //! DEBUG
    return NextResponse.json({ok: "OK" })
  }
  