import NavBar from "@/components/NavBar"
import './globals.css'
import { Metadata } from "next"

export const metadata:Metadata ={
  title:'Roitai NextJS',
  description:'Nextjs15 qweqwe',
  keywords:'Roitai , Camping , Thailand , NextJS'
}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <html>
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}

export default layout