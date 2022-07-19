import React, { useState } from "react";

import box from "../assets/box.svg";
import bell from "../assets/bell.svg";
import filetext from "../assets/filetext.svg";
import hash from "../assets/hash.svg";
import helpcircle from "../assets/helpcircle.svg";
import home from "../assets/home.svg";
import layers from "../assets/layers.svg";
import search from "../assets/search.svg";
import settings from "../assets/settings.svg";
import sliders from "../assets/sliders.svg";
import alignjustify from "../assets/alignjustify.svg";
import PersonalCard from "./PersonalCard";

const ParentComponent = () => {
  const [open, setOpen] = useState(true);
  const Name = [
    { title: "Search", src: search },
    { title: "Home", src: home, gap: true },
    { title: "Dashboard", src: box },
    { title: "Projects", src: filetext },
    { title: "Tasks", src: hash },
    { title: "Reporting", src: sliders },
    { title: "Notifications", src: bell, gap: true },
    { title: "Support", src: helpcircle },
    { title: "Settings", src: settings },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } p-5 pt-6 relative h-screen cursor-pointer duration-300 bg-style-green grid grid-flow-row auto-rows-max text-xl font-medium text-black`}
      >
        <img
          src={alignjustify}
          alt="outer-tag"
          className={`absolute cursor-pointer rounded -right-3 top-8 w-7 border-2 border-style-purple ${
            !open && "rotate-180 duration-500"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className="flex p-2 gap-x-4 items-center">
          <img
            src={layers}
            alt="Heading-icon"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-black origin-left pl-2 font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Untitled
          </h1>
        </div>
        <div className="pt-6">
          {Name.map((head) => (
            <div
              className={`flex flex-row items-center cursor-pointer p-2 hover:bg-style-blue rounded-md gap-x-4 ${
                head.gap ? "mt-9" : "mt-2"
              }`}
            >
              <img className="w-6 h-6" src={head?.src} alt="images-mapped" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 pl-2 text-darkest-black`}
              >
                {head?.title}
              </span>
            </div>
          ))}
        </div>
        <div
          className={`${!open && "scale-0"} origin-left duration-200 pl-2 pt-2`}
        >
          <PersonalCard open={open} />
        </div>
      </div>
      <div className="h-screen bg-darker-black flex-1 p-7">
        <h1 className="text-2xl text-style-purple font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default ParentComponent;
