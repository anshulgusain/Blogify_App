

import { useState } from "react"
import "../Styles/Create.css"




function Create() {

  const handleSubmit = () => {

  }
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [blog, setBlog] = useState("")

  const obj = {
    title,
    image,
    author,
    blog
  }

  return (
    <div className="Parent">
      <div id="typepad">
        <form onSubmit={handleSubmit}>
          <label>Blog Title</label>
          <input placeholder="Type Here" onChange={((e) => {
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
          <textarea placeholder="Type Your Content here" className="typearea" rows={"8"} cols={"10"} onChange={((e) => {
            setBlog(e.target.value)
          })}></textarea>
          <button type="submit" className="submit">Create</button>

        </form>
      </div>

      <div className="preview">
       
        <div className="box">
          <div className="left">
          <h1>{title}</h1>
          <h4>By-{author}</h4>
          </div>
          <div className="right">
            <img src={image} alt="image"  />
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