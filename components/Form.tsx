"use client"
import { createCamp } from '@/app/utils/actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () =>{
    const { pending } = useFormStatus()
    return <button type='submit' disabled={pending}>
        {pending ? "Submitting...": "Submit"}
    </button>
    
}

const Form =  () =>  {
    const [message , formAction] = useActionState(createCamp,null)
    //message คือข้อความที่ได้มาจาก server 
  return (
    <>
        {message && <h1>{message}</h1>} 
       <form action={formAction}>
            FORM
            <input className="border" placeholder="camping name" name="title" defaultValue="Korat300"/>
            <input className="border" placeholder="location" name="location" defaultValue="eiei"/>
            <SubmitButton></SubmitButton>
       </form>
    </>
 
  )
}

export default Form