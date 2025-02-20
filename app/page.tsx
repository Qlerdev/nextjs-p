const page = async() => {
  await new Promise((resolve)=>{
    setInterval(resolve,1000)
  })
  return (
    <>
      <h1>hello punnakan</h1>
      <p>eiei</p>
    </>
  )
}

export default page