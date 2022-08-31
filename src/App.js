import './App.css';
import Search from './components/Search';
import Photos from './pages/Photos';
import {Switch, Route, useParams } from "react-router-dom"
import PhotoDetails from './pages/PhotoDetails'
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Nav from './Nav';


function App() {
  return (
    <SkeletonTheme baseColor="#d4d4d4" highlightColor="#adaaaa">
    <Nav />
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Search />
      <h1>Free Stock Images</h1>
      <div className='box-wrapper'>
      <Box sx={{ width: "85vw"}}>
      <ImageList variant="masonry" cols={3} gap={12}>
      <Photos />
      </ImageList>
      </Box>
      </div>
      </Route>
      <Route path="/image/:serviceId">
      <PhotoDetails />
      </Route>
      </Switch>
    </div>
    </SkeletonTheme>
  );
}

export default App;
