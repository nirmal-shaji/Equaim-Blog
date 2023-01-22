import React,{useEffect,useState} from 'react'
import { PlusSquareOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { getAllBlog,showBlog } from '../../api/serverApi'
import './Cards.css'
const Cards = () => {
  const [blog, setBlog] = useState([])
  
  const loadBlog = (id) => {
    console.log(id);
    navigate(`/blog/${id}`)
  }
  useEffect(() => {
    const getBlogs = async() => {
      const {data} = await getAllBlog();
      setBlog(data);
    }
    getBlogs()
  
 
  }, [])
  
  const navigate = useNavigate();
  const newBlog = () => {
    navigate('/addBlog')
  }

  return (
    <div className="container">
      <div className="row">
        {blog.map((card)=>{
          return(    <div className='col-md-4 my-5'>
            <div className='cards'>
              <div className='mt-1'>{card.heading}</div>
            <div className='mt-5' onClick={()=>loadBlog(card._id)}>view more</div>
            </div>
        </div>)
        })}
  
     
     
      </div>
      
      <div className="icon-div" align="right" onClick={newBlog}>
         
        <PlusSquareOutlined style={{ fontSize: "30px" }} />
        
      </div>
     
  </div>
        
        
  )
}

export default Cards