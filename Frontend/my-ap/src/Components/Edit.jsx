import {  useState } from "react"
import "../Styles/Create.css"
import axios from "axios"
import {useLocation, useNavigate} from "react-router-dom"

const Edit=()=> {
  const location = useLocation();

  
  if(location.state){
  var auth=location.state.author
  var img=location.state.image
  var blg=location.state.blog
  var titl=location.state.title
  var id=location.state._id
 
  }

    

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

  const handleSubmit = async() => {
    const obj = {
      title,
      image,
      author,
      blog
    }
    const dat=JSON.stringify(obj)

    try{
      const response=await axios.put(`https://long-tan-cygnet-tie.cyclic.app/blog/edit/${id}`,dat,config)
      // console.log(response)
      await navigate("/")
      console.log(response)
      alert("Blog edited Succesfully")
      // navigate("/", { state: { _id: id,
      //   author:auth,title:titl,image:image,blog:blog
       
      //   } });
      
    }catch(err){
      console.log(err)
      alert(err)
      setError(true)
    }
   
  }


if(error) return<div><h1>Error in Editing Blog</h1></div>

  return (
    <div className="Parent">
      <div id="typepad">
        <form >
          <label>Blog Title</label>
          <input placeholder={titl}  onChange={((e) => {
            setSee(true)
            setTitle(e.target.value)
          })}></input>
          <label>Image URL</label>
          <input placeholder={img} onChange={((e) => {
            setImage(e.target.value)
          })}
          ></input>
          <label>Author</label>
          <input placeholder={auth} onChange={((e) => {
            setAuthor(e.target.value)
          })}></input>
          <label>Blog Content</label>
          <textarea placeholder={blg} className="typearea" rows={"7"} cols={"9"} onChange={((e) => {
            setBlog(e.target.value)
          })}></textarea>
          <button type="submit" className="submit" onClick={handleSubmit}>Edit</button>

        </form>
      </div>

      <div className={seePrev?"preview":"previewhide"}>
       
        <div className="box">
          <div className="left">
          <h1>{titl}</h1>
          <h4>By-{auth}</h4>
          </div>
          <div className="right">
            <img src={img} alt="Blog"  />
          </div>
          
         
        </div>
        <div className="blogarea">
            <p>{blg}</p>
          </div>
      </div>


    </div>

  )
}

export default Edit