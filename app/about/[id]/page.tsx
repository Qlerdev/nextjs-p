const AboutDetailPage = async({params}) => {
  const {id} = await params.id
  return (
    <>
        <div>AboutDetailPage</div>
        {id}
    </>

  )
}

export default AboutDetailPage