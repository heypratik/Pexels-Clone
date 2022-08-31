import React, {useEffect, useState, useContext} from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import {Link} from "react-router-dom"
import {Context} from '../Context'


function Images({img, author, arr}) {

  const {ImgSelected} = useContext(Context)
  const [hovered, setHovered] = useState(false)

  return (
    <div className='img-div' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img width="100%" src={img} className="image-grid"/>
      {hovered ? <Link to={`/image/${arr.id}`}><i className='hover-icon' onClick={() => ImgSelected(arr)}><FaChevronRight /></i></Link> : ''}
      {/* {hovered ? <i className='hover-icon-download' onClick={handleChange()}><FaDownload /></i> : ''} */}
      {hovered ? <a href={img.split('?')[0]} className="hover-icon-download" target="_blank" download><FaDownload /></a> : ''}
      {hovered ? <span><p className='author-hover'><img width="30px" src="https://i.imgur.com/PnUCTFH.png" /><b>{author}</b></p></span> : ''}
      </div>
      
  )
}

export default Images