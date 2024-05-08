

import {  useState } from "react"
import "../Styles/Create.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"




function Create() {

const navigate=useNavigate()

  const [error, setError] = useState(false)
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAA1BMVEX///+nxBvIAAAAPUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvgyZwAABCrx9CgAAAABJRU5ErkJggg==")
  const [author, setAuthor] = useState("")
  const [blog, setBlog] = useState("")
  const [seePrev, setSee] = useState(false)




  const config={
    headers:{
      "Content-Type": "application/json",
      "authorization":`Bearer ${localStorage.getItem("token")}`
    }
  }

  const handleSubmit = async(e) => {
e.preventDefault()

    const obj = {
      title,
      image,
      author,
      blog
    }
    const dat=JSON.stringify(obj)

    try{
      const response=await axios.post(`https://long-tan-cygnet-tie.cyclic.app/blog/add`,dat,config)
      // console.log(response.data)
      alert(response.data)
      if(response.data==="Blog Created Sucessfully"){
       navigate("/home")
      }
      
    }catch(err){
      console.log(err)
      alert(err)
      setError(true)
    }
   
  }


if(error) return<div><h1>Error in Creating Blog</h1></div>

  return (
    <div className="Parent">
      <div id="typepad">
        <form >
          <label>Blog Title</label>
          <input placeholder="Type Here" onChange={((e) => {
            setSee(true)
            setTitle(e.target.value)
          })}></input>
          <label>Image URL</label>
          <input placeholder="Type Here" onChange={((e) => {
            setImage(e.target.value)
          })}
          ></input>
          <label>Author</label>
          <input placeholder="Type Here" onChange={((e) => {
            setAuthor(e.target.value)
          })}></input>
          <label>Blog Content</label>
          <textarea placeholder="Type Your Content here" className="typearea" rows={"7"} cols={"9"} onChange={((e) => {
            setBlog(e.target.value)
          })}></textarea>
          <button type="submit" className="submit" onClick={handleSubmit}>Create</button>

        </form>
      </div>

      <div className={seePrev?"preview":"previewhide"}>
       
        <div className="box">
          <div className={seePrev?"left":"previewhide"}>
          <h1>{title}</h1>
          <h4 className={seePrev?"left":"previewhide"}>By-{author}</h4>
          </div>
          <div className="right">
            <img src={image} alt="Blog"  />
          </div>
          
         
        </div>
        <div className="blogarea">
            <p>{blog}</p>
          </div>
      </div>


    </div>

  )
}

export default Create