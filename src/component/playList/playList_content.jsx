import React, { Component } from 'react';

class PlayList_content extends Component {
    render() {
        return (
            <div className ="playlist_content">
            {this.props.video.content}
        </div>
        );
    }
}

export default PlayList_content;