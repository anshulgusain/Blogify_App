
import axios from "axios"
import { useEffect, useState } from "react"
import "../Styles/Home.css"



function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const config = {
    headers: {
      "Content-Type": "application/json",
      "authorization": `Bearer ${localStorage.getItem("token")}`
    }
  }

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get("http://localhost:8080/blog", config)
        // console.log(response)
        setData(response.data.data)
        setLoading(false)
      } catch (err) {
        setError(true)
        console.log(err)
      }

    }
    search()
  }, [])

  if(loading) return <div>Loading ........</div>
  if(error) return <div>Sorry there is an Error</div>

  return (
    <div className="blogparent">
      {data.map((ele)=>(
         <div className="blogcontainer" key={ele.title}> 
           <div className="blogimage">
           <img src={ele.image} alt="blog" />
         </div>
         <div className="blogtitle">
           {ele.title}
         </div>
         <div className="blogblog">
           {ele.blog}
         </div>
         <div className="blogauthor">
              -By {ele.author}
         </div>
       
         
       </div>
      ))
       
      }

    </div>
  )
}

export default Home