import './app.css';
import PlayLists from './component/playLists';
import Search from './component/search';
import React, { Component } from 'react';
import LightMode from './component/lightMode';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchVideo = this.searchVideo.bind(this);

    const requestURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyBkJQSp-I1Hs8cnicIFBjLJXZYipnrDuok`;
    const request = new XMLHttpRequest();

    request.open('GET',requestURL);
    request.responseType="json";
    request.send();

    request.onload = ()=>{
        const json = request.response;
        this.handleSearchAdd(json);
    }
  }

  state = {
    flag : 0,
    search : null,
    maxresult : 25,
    videos:[]
  }

  searchVideo = (value) =>{
    // fetch에 value 값 넣어서 JSON 생성 후 JSON을 handleSearchAdd에 넘겨주기.
    const requestURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyBkJQSp-I1Hs8cnicIFBjLJXZYipnrDuok`;
    const request = new XMLHttpRequest();

    request.open('GET',requestURL);
    request.responseType="json";
    request.send();

    request.onload = ()=>{
        const json = request.response;
        this.handleSearchAdd(json);
    }
    if(this.state.flag===1){
      const video = document.querySelector(".playvideo");	
      video.parentNode.removeChild(video);
      this.setState({ flag : 0 });
    }
  }

  handleSearchAdd = (json) =>{
    const video = [...this.state.videos];
    video.splice(0,video.length);
    for(let i = 0; i<this.state.maxresult; i++){
      video.push({
        id:i,
        picture_src:json.items[i].snippet.thumbnails.high.url,
        content:json.items[i].snippet.title,
        videoId:json.items[i].id.videoId
      })
    }
    this.setState({ videos: video });
  }

  playVideo = (videoId)=>{
    const app = document.querySelector(".App");
    
    if(this.state.flag===0){
      const video = document.createElement("iframe");
      video.src="https://www.youtube.com/embed/" + videoId;
      video.classList.add("playvideo");
      const playlists = document.querySelector(".playlists");

      app.insertBefore(video, playlists);
      this.setState({ flag : 1 });
      app.scrollIntoView();
    }
    else{
      const video = document.querySelector(".playvideo");
      video.src = "https://www.youtube.com/embed/" + videoId;
      
      app.scrollIntoView();
    }
  }


  render() {
    
    return (
      <div className = "App">
        <Search onSearchVideo = {this.searchVideo} videos = {this.state.videos}/>
        <LightMode />
        <PlayLists
            onPlayVideo = { this.playVideo } 
            videos = {this.state.videos}
            />
      </div>
    );
  }
}

export default App;