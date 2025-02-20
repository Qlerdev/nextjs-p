import { fetchCamp } from "@/app/utils/actions"

const CampList = async() => {
  const camps = await fetchCamp()
  console.log(camps)
  return (
    <div>
        {camps.map((item,index) => {
            return <li key={index}>{item.id},{item.title}</li>
        })}
    </div>
  )
}

export default CampList