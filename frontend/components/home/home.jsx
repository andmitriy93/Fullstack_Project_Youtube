import React from 'react';
import SideBarContainer from '../sidebar/sidebar_container';
import VideoIndexContainer from '../video/video_index_container';
import NavBar from '../nav_bar/nav_bar_container'

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="home-items-container">
          <SideBarContainer />
          <VideoIndexContainer />
        </div>
      </div>
    )
  }
}

export default Home;