import React, {useContext, useEffect, useState} from 'react'
import { Context } from "../Context"
import { FaCheckCircle, FaInfoCircle, FaShareSquare } from 'react-icons/fa';
import Photos from './Photos';
import {useParams} from "react-router-dom"
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import { Skeleton } from "@mui/material";
import SkeletonCard from "../SkeletonCard";

function PhotoDetails(props) {
  const {Loaded} = useContext(Context)

  const {selectedObj, changeQuery, selectedObjName} = useContext(Context)
  const {serviceId} = useParams()


    useEffect(() => {
      window.scrollTo(0, 0)
      changeQuery(selectedObjName)
    }, [selectedObj])

  return (
    <div className="image-parent-main">
      <div className="image-child-one">
        <span><h2 className="image-child-author" ><img width="30px" src="https://i.imgur.com/PnUCTFH.png"/><b>{selectedObj.photographer}</b></h2></span>
      <div><a href={selectedObj.src.large2x.split('?')[0]} target="_blank" download><button className="download-btn">Free Download</button></a></div></div>
      <div className="image-child-two">
      {Loaded ? <img width="50%" src={selectedObj.src.large2x} /> : <SkeletonCard cards={1}/>} 
      </div>
      <div className="image-child-three">
      <div className="icon"><FaCheckCircle/><p>Free to use</p></div>
      <div className='icon-two'>
        <button className='info-btn'><FaInfoCircle /> More Info</button>
        <button className='info-btn'><FaShareSquare /> Share</button>
      </div>
      </div>
      <h1 className="more">More like this</h1>
      <div className='box-wrapper'>
      <Box sx={{ width: "85vw"}}>
      <ImageList variant="masonry" cols={3} gap={12}>
      {Loaded ? "" : <SkeletonCard cards={100}/>}
      <Photos />
      </ImageList>
      </Box>
      </div>
    </div>
  )
}

export default PhotoDetails