import React from 'react'
import'./Portfolio.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import './img1.png';

export default function Portfolio(){
  return (
    <div className="container">
      <div className="left">
        <h2>Email</h2>
        <p>alokdas80188@gmail.com</p>
        <h2>Phone</h2>
        <p>+880 174 037 6995</p>
        <h2>Find me on</h2>
        <div className="socialmedia">
         <YouTubeIcon/>
         <InstagramIcon/>
         <TwitterIcon/>
         <WhatsAppIcon/>

        </div>

      </div>
      <div className="right">
        <div id="right1">
        <h1>SANTUSH<br/> <span>DEV</span></h1>
        <h3>Creative Director - Saint Studious</h3>
        <p>Iam Santosh Dev Nath. a huge HTML lover.A 25 - year - old living in a small,<br/>
         but damn beautiful country called Bangladesh. </p>
         <button type="button" id="firstbutton">PORTFOLIO</button>
         <button type="button"id="secondbutton">RESUME</button>
         </div>
         {/* <img src={"./img1.png"}/> */}
         <div className="imgright"><img src={"./img1.png"} style={{width: "380px",
    height: "600px"}}/></div>

         

      </div>

        
    </div>
  )
}
