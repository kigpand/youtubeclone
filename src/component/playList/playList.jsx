import React, { Component } from 'react';
import PlayList_content from "./playList_content";
import PlayList_video from "./playList_video";

class PlayList extends Component {
    
    onPlayVideo = () =>{
        this.props.onPlayVideo(this.props.video.videoId);
    }

    render() {
        return (
            <span className = "playlist" onClick = {this.onPlayVideo}>
                <PlayList_video video = {this.props.video}/>
                <PlayList_content video = {this.props.video}/>
            </span>
        );
    }
}

export default PlayList;