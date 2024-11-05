import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

    //resolve fetch of loader and get rest
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data fetch loader
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  if(!res.ok) {
    console.log("not ok")
    throw Error('Could not fetch the careers')   
  }

  return res.json()
}