import React, { Component } from 'react';

class PlayList_video extends Component {
    render() {
        return (
            <div className = "playlist_picture"><img className = "playlist_picture" src = {this.props.video.picture_src}></img></div>
        );
    }
}

export default PlayList_video;