import "./landingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage(){



    
    return (
      <>
        <img
          className="main_image"
          src="./images/colour-lense.jpg"         
          alt="coloured_lenz"
        />
        <div className="headPlusBtn">
        <h1 className="main_header">
          Welcome to &nbsp; 
          <span>C</span>
          <span>o</span>
          <span>l</span>
          <span>o</span>
          <span>r</span>
          <span>g</span>
          <span>r</span>
          <span>a</span>
          <span>m</span>
        </h1>
        <Link to="/posts"><button className="main_btn">Enter</button></Link>
        </div>
      </>
    );
}