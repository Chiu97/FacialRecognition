import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Nav/Navigation';
import Logo from './Components/Logo/Logo';
import ImgLink from './Components/ImgLink/ImgLink';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Reserved from './Components/Reserved/Reserved';
import ImgDisplay from './Components/ImgDisplay/ImgDisplay';
import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: '8ef681369f024dd892f6dbbe153355d0'
 });


class App extends Component{
  constructor(){
    super();
    this.state={
      input:'',
      route:'sign-in',
      logout: true,
      boundingbox:{},
      imgurl:'https://blueocean.azureedge.net/cache/e/3/1/9/7/6/e31976c207c315cf74a0ff798db476f8d315c8cc.jpg'
    }
  }

  onRouteChange = (routeState) => {
    const newLogout = routeState === 'home' ? false : true;
    this.setState({route : routeState,logout : newLogout});
  }

  onUrlChange = (event) => {
    this.setState({input:event.target.value});
  }

  onUpload = () => {
    this.setState({imgurl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      const faceArea = response.outputs[0].data.regions[0].region_info.bounding_box;
      this.setState({boundingbox: this.calBoundingBox(faceArea)})
    })
    .catch(err =>{
      console.log(err);
    })
  }

  calBoundingBox = (faceArea) =>{
    const sourceImg = document.getElementById('face-picture');
    const width = Number(sourceImg.width);
    const height = Number(sourceImg.height);
    return {
      top: faceArea.top_row * height,
      bottom: height - faceArea.bottom_row * height,
      left: faceArea.left_col * width,
      right: width - faceArea.right_col * width
    }
  }
  

  render(){
    const { input,route,logout,imgurl,boundingbox } = this.state;
    return (
      <div>
        <Navigation onLogout={logout} onRouteChange={this.onRouteChange}/>
        {
          route === 'sign-in' ? 
          <SignIn onRouteChange={this.onRouteChange}/> : route === 'sign-up' ? 
          <SignUp onRouteChange={this.onRouteChange}/> :    
          (<div>
            <Reserved />
            <ImgLink piclink={input} onUrlChange={this.onUrlChange} onUpload={this.onUpload} />
            <ImgDisplay imgurl={imgurl} box={boundingbox}/>
            </div>)
        }
        <Logo className='mt5'/>
      </div>
    );
  }
}

export default App;
