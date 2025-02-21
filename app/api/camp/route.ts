import { fetchCamp } from "@/app/utils/actions"
import { url } from "inspector"
import { NextResponse } from "next/server"

export const GET  = async(req:NextResponse) =>{
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search')
    console.log(search)

    const camps = await fetchCamp()
    return Response.redirect(new URL('/',req.url))
}