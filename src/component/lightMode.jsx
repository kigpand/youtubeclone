import React, { Component } from 'react';

class LightMode extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true
        };
        this.onLightMode = this.onLightMode.bind(this);
    }

    onLightMode(){
        this.setState(() => {
            this.onBodyChange(!this.state.isToggleOn);
            return {isToggleOn: !this.state.isToggleOn};
          });
    }

    onBodyChange(flag){
        const app = document.querySelector(".App");
        const playlist = document.querySelectorAll(".playlist");
        if(flag){
            app.style.backgroundColor = "#000000";
            app.style.color = "#ffffff";
            for(let i = 0;i<playlist.length;i++){
                playlist[i].style.border = "4px solid #ffffff";
            }
        }
        else{
            app.style.backgroundColor = "#ffffff";
            app.style.color = "#000000";
            for(let i = 0;i<playlist.length;i++){
                playlist[i].style.border = "4px solid #000000";
            }
        }
    }

   
    render() {
        return (
            <div className = "light_container" onClick = {this.onLightMode}>
                {this.state.isToggleOn ? '밝은 모드로 켜기' : '어두운 모드로 켜기'}
            </div>
        );
    }
}

export default LightMode;