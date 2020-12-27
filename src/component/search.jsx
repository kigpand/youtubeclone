
import React, { Component } from 'react';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick=()=>{
        this.props.onSearchVideo(this.ref.current.value);
        this.ref.current.value ="";
    }

    handleEnterKey = () =>{
        if (window.event.keyCode === 13) {
            this.props.onSearchVideo(this.ref.current.value);
            this.ref.current.value ="";
        }
    }

    render() {
        return (
            <div className = "search">
                <div className = "search-title"><i className="fab fa-youtube"></i>&nbsp;CloneTube</div>
                <input type="text" className="search-form-input" placeholder="검색..."  ref = {this.ref} onKeyUp = {this.handleEnterKey}/>
                <button className="search-button" onClick={this.handleClick}><i className="fas fa-search" ></i></button>
            </div>
        );
    }
}

export default Search;