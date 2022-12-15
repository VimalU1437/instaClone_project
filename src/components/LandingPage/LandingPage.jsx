import "./landingPage.css";

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
        <button className="main_btn" onClick={()=>{}}>Enter</button>
        </div>
      </>
    );
}