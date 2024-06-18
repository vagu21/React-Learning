import React, { useState } from 'react'
import car from './car.png'
import song from './Paaraa.mp3';
import video from './vid.mp4';
import {Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const About = () => {
  const[auth,Setauth]=useState(false);
if(auth){
 return  <Navigate to='/Login'/>
}
  return (
    <div>
        <h1>This is About Component</h1>
        <p>Below is the Example for Navigate component</p>
        <button onClick={()=>Setauth(true)}>Login</button>
        <center>
        <img src={car}/>&nbsp;
        <a href={car} download="car"><button>Download img</button></a>
          <audio controls>
            <source src={song}/>
          </audio>
          <video  height="200px" width="400px"  controls>
            <source src={video} />
          </video>
        </center>
        <h2>Card Component from react-bootstrap</h2>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={car} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
  )
}

export default About