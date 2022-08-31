import React, {useContext, useState} from "react"
import { Context } from "../Context"
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"
import SkeletonCard from "../SkeletonCard";


function Photos() {
  const {ImgSelected} = useContext(Context)
    const {allPhotos} = useContext(Context)
    const [hovered, setHovered] = useState(false)
    const {Loaded} = useContext(Context)

    const imgEl = allPhotos.map(function(photo, i) {
      return (
      <ImageListItem key={i}> <img src={photo.src.large} srcSet={photo.src.large} alt={i} loading="lazy" />

      <Link to={`/image/${photo.id}`} onClick={() => ImgSelected(photo)}><ImageListItemBar key={i}
        sx={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',}}
            title={photo.photographer}
            position="top"
            actionIcon= { <IconButton sx={{ color: 'white' }}> <ExitToAppIcon /> </IconButton> }
            actionPosition="right" />
        </Link>

        </ImageListItem>)
     })
    
     

  return (
    <div>
      {Loaded ? "" : <SkeletonCard cards={100}/>}
      {imgEl}
    </div>
  )
}

export default Photos
