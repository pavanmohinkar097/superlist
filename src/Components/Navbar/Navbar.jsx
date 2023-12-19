import React from "react";
import "./Navbar.css";
import { FcRightUp } from "react-icons/fc";


const Navbar = () => {
  return (
    <>
    <div className="navbar">
        
    </div>
    
    <section className="Heading">
      <div className="two">
      <b>Superlist</b>
      
      <button class="button0 button00">Sign in <FcRightUp/> </button>
      </div>
      
      <div className="HomeList">
        <h1 className="HomeListSection">
          <b>
            Home to
            <br />
            all your<span className="Listssec">lists</span>
          </b>
          
        </h1>
        
      </div>
      
        <div className="boogabutton" >
          <button class="button1"><b>Teamwork</b></button>
          <button class="button2"><b>Personal projects</b></button>
          <button class="button3"><b>Everything inbetween</b></button>
          
        </div>
      
      
    </section>
      {/* <div className="navbarP"></div>

      <div className="LogoSection">
        <div className="d-flex">
          <h1 className="CompanyName">
            <b>Superlist</b>
          </h1>
          <button className="JoinCompnayButton">Join our Beta</button>
        </div>
      </div>
      <div className="HomeList">
        <h1 className="HomeListSection">
          <b>
            Home to
            <br />
            all your<span className="Listssec">lists</span>
          </b>
        </h1>
      </div>
      <div className="ButtonSection">
        <div className="d-flex ButtonSctionP">
          <button className="FristButton">Teamwork</button>
          <button className="MiddleButton">Personal projects</button>
          <button className="LastButton">Everything inbetween</button>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
