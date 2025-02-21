import { NextResponse } from "next/server"

export const middleware = (req:Request) =>{
    console.log('asd')
    return NextResponse.redirect(new URL('/',req.url))
}

export const config ={
    matcher:['/info/:path*','/about/:path*']
}