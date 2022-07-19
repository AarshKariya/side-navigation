import React from "react";

import heart from "../assets/heart.svg";
import morevertical from "../assets/morevertical.svg";

const PersonalCard = ({ open }) => {
  return (
    <div className="card align-middle flex items-center p-6 max-w-sm mx-auto space-x-4 bg-style-purple rounded-md">
      {!open && (
        <div>
          <img className="w-6 h-6" src={heart} alt="Personal-card" />
        </div>
      )}
      {open && (
        <>
          <div className="text-sm">
            <div>Brooklyn Simmons</div>
            <div>brooklyn@simmons.com</div>
          </div>
          <div>
            <img className="w-10 h-10" src={morevertical} alt="Three-dots" />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalCard;
