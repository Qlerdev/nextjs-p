"use server"
//refresh ข้อมูล
import { revalidatePath } from "next/cache"
import { redirect } from "next/dist/server/api-utils"

export const createCamp = async(prevState:any,FormData:FormData) =>{
    await new Promise((resolve)=>{
        setInterval(resolve,1000)
    })
    // const title = FormData.get('title')
    // const location = FormData.get('location')
    const rawData = Object.fromEntries(FormData)
    console.log(rawData)
    // revalidatePath('/camp') รีเฟรชข้อมูล
    //redirect('/')เมื่อทำงานเสร็จเรียบร้อยให้ไปไหน หลังจากกดปุ่ม
    //
    return 'create camp success'
}

export const fetchCamp = async() =>{
    //prisma.camp.findMany({})
    const camps = [
        {
            id:1,
            title:'ei'
        },{
            id:2,
            title:'eiei'
        },{
            id:3,
            title:'eieiei'
        }
    ]
    return camps
}