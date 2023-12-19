import React from "react";
import "./Main.css";
import { FcHome } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcPodiumWithAudience } from "react-icons/fc";
import { FcRuler } from "react-icons/fc";

const Main = () => {
  return (
    <>
      <div className="Box">
        <div className="allbox">
          <div className="onebox">
            <div className="twobutton">
              <button class="button"></button>
              <button class="button"></button>
            </div>
            <div className="twobutton">
              <button class="button"></button>
              <button class="button"></button>
            </div>

            <div className="Items">
              <h4>List</h4>
              <div className="groupitems">
                <ul>
                  <img src="https://tse3.mm.bing.net/th?id=OIP.haqOgU9snCAo6TnU_CyTtgHaHL&pid=Api&P=0&h=180"></img>
                  App Launch
                </ul>

                <ul>
                  <FcHome />
                  Kitchen Reno
                </ul>
                <ul>
                  <FcSportsMode />
                  Daily Habits
                </ul>
                <ul>
                  <FcPodiumWithAudience />
                  Recipes
                </ul>
                <ul>
                  <FcRuler />
                  Design Work
                </ul>
              </div>
            </div>
            
            
           
          </div>
          
          <div className="twobox"></div>
          <div className="threebox">
            <img className="three" src="https://tse4.mm.bing.net/th?id=OIP.NR_xmK4mX_8bUwBr8H3UxQHaFX&pid=Api&P=0&h=180"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
