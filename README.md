## Youtube API를 이용한 Youtube CloneCoding 사이트
<div>
<img src = "https://user-images.githubusercontent.com/70279943/103324648-c7ec6500-4a8b-11eb-8cdc-a2c2e2cc8bbb.PNG" width = "400px">
<img src = "https://user-images.githubusercontent.com/70279943/103324660-d8044480-4a8b-11eb-9705-da59d90e02b7.PNG" width = "400px">
</div>

### 기능

------------------- app.jsx -----------------------
```js
searchVideo = (value) =>{
    const requestURL = 요청할 URL;
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
  ```
  
 ------------------- search.jsx -----------------------
```js
handleClick=()=>{
        this.props.onSearchVideo(this.ref.current.value); //app의 onSearchVideo props로 호출
        this.ref.current.value ="";
    }

    handleEnterKey = () =>{
        if (window.event.keyCode === 13) {
            this.props.onSearchVideo(this.ref.current.value);
            this.ref.current.value ="";
        }
    }
```
>* #### 검색으로 Youtube 조회.
___

```js
playVideo = (videoId)=>{      //검색결과로 얻은 videoId를 통해 Iframe생성.
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
```
>* #### 조회한 Youtube 영상 시청.
___
```js
constructor(props){
        super(props);
        this.state = {
            isToggleOn : true       // 모드 전환을 위한 boolean값.
        };
        this.onLightMode = this.onLightMode.bind(this);
    }

    onLightMode(){
        this.setState(() => {
            this.onBodyChange(!this.state.isToggleOn);  // 모드전환할때 css값 변화를 위한 
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
    
    {this.state.isToggleOn ? '밝은 모드로 켜기' : '어두운 모드로 켜기' }  //isToggleOn의 값에 따라 변환. 
```

### 기술
>* React 사용
>* Youtube 기본 제공 API 사용.
