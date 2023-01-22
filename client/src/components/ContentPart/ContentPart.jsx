import React, { useRef, useState } from 'react'
import "./ContentPart.css"
import {
    BoldOutlined, HomeOutlined, CheckSquareOutlined, ItalicOutlined,
    UnderlineOutlined, StrikethroughOutlined, LinkOutlined, FontColorsOutlined,
    CloseOutlined
} from '@ant-design/icons'
import { imageUpload } from '../../api/cloudenaryApi'
import {createBlog} from '../../api/serverApi'
import { useNavigate } from 'react-router-dom'



const ContentPart = () => {
    const [image, setImage] = useState()
    const [heading, setHeading] = useState()
    const [paragraph, setParagraph] = useState()
    const imageRef = useRef();
    const navigate = useNavigate();
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const handleSubmit = async() => {
        console.log(paragraph, heading)
        if (image) {
          const datas = new FormData();
          const filename = Date.now() + image.name;
          
          datas.append("name", filename);
          datas.append("file", image);
          datas.append("upload_preset", "ogamtbe3");
          datas.append("cloud_name","dxxgj5lfp")
       
          const {data} = await imageUpload(datas);
            
            const blogData = {
                imageUrl: data.secure_url,
                paragraph,
                heading
            }
           
            await createBlog(blogData)
            setImage(null);
            setParagraph('');
            setHeading('');
            navigate('/');
          
        } 
    }

    return (
        <div className='parent'>
            <div className="section-one">
                <div className="box">
                    <HomeOutlined onClick={()=> navigate('/')} />
                </div>
                <div className="box" onClick={handleSubmit}>
                    <CheckSquareOutlined />
                </div>

            </div>
            <div className='section-two'>
                <div className='box'>
                    <div className="top">
                        <div className='icons'>
                            <div className='icon'>
                                <BoldOutlined />
                            </div>
                            <div className='icon'>
                                <ItalicOutlined />
                            </div>
                            <div className='icon'>
                                <UnderlineOutlined />
                            </div>
                            <div className='icon'>
                                <StrikethroughOutlined />
                            </div>
                            <div className='icon'>
                                <FontColorsOutlined />
                            </div>
                            <div className='icon' onClick={() => imageRef.current.click()}>
                                <LinkOutlined />
                            </div>
                            <div style={{ display: "none" }}>
                                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                            </div>

                        </div>
                    </div>
                    <div className="content">
                        <input type="text" placeholder='Header..' onChange={(e)=>setHeading(e.target.value)} />
                        <textarea name="" placeholder='Text...' id="" cols="30" rows="10" onChange={(e)=>setParagraph(e.target.value)}></textarea>
                    </div>
                    {image &&

                        (<div className="preview-image">
                            <CloseOutlined onClick={() => {
                                setImage(null)
                            }} />
                            <img src={URL.createObjectURL(image)} alt="" />
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default ContentPart