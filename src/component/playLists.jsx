
import React, { Component } from 'react';
import PlayList from './playList/playList';

class PlayLists extends Component {
    render() {
        return (
            <div className = "playlists">
            {this.props.videos.map(video => (
                <PlayList key={video.id} onPlayVideo = { this.props.onPlayVideo }  video = {video} />
            ))}
            </div>
        );
    }
}

export default PlayLists;