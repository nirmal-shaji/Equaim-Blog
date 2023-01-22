import React from 'react'
import "./DisplayContent.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import { showBlog } from '../../api/serverApi'
import { HomeOutlined } from '@ant-design/icons'


const DisplayContent = () => {
    const { id } = useParams()
    console.log(id)
    const navigate=useNavigate()
    const [blogData,setBlogData]=useState()
   
    useEffect(() => {
        const blog = async() => {
            const { data } = await showBlog(id);
            console.log(data)
            setBlogData(data)
        }
        blog()
      
    }, [])
    
    return (
        <div className='display-content'>
            
            <div className="section-one">
                <div className="box" onClick={() => {
                    navigate('/')
                }}>
                    <HomeOutlined />
                </div>
              

            </div>
            <div className='section-two'>
                <div className='box'>
                    
                    <div className="content">
                        <h4>{blogData?.heading}</h4>
                        <p>{blogData?.paragraph}</p>
                    </div>
                    <div className="preview-image">
                         
                            <img src={blogData?.imageUrl} alt="" />
                        </div>
                </div>
            
            </div>
           
        </div>
    )
}

export default DisplayContent