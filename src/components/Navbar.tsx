import "react-modern-drawer/dist/index.css";

import React, { useState } from "react";

import { ChatIcon, GearIcon, ShoppingBagIcon } from "@components/icons";
import { Link } from "@tanstack/react-router";
import Drawer from "react-modern-drawer";
import { useSound } from "react-sounds";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const {
    play, // Function to play the sound
    stop, // Function to stop the sound
    pause, // Function to pause the sound
    resume, // Function to resume a paused sound
    isPlaying, // Boolean indicating if sound is currently playing
    isLoaded, // Boolean indicating if sound has been loaded
  } = useSound("ui/button_hard");

  return (
    <nav className="navbar bg-base-200">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl normal-case">
          Comrade Circuits
        </Link>
      </div>
      <div className="navbar-end font-heading">
        {/* Mobile dropdown */}
        <div className="lg:hidden">
          <button
            onMouseDown={() => {
              play();
            }}
            className="btn btn-ghost btn-circle"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        style={{ backgroundColor: "#000" }}
        className="border-neutral container border-x-2 border-t-8 border-b-0"
      >
        <div className="flex w-full flex-col items-center justify-center">
          {/* TODO: fix the button colors */}
          <div className="flex h-24 w-full items-center justify-center">
            <button
              onMouseDown={() => {
                play();
              }}
              disabled={!isLoaded}
              className="mr-2 h-16 w-16 cursor-pointer border-[1px] border-blue-400 bg-blue-500 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
            >
              <ShoppingBagIcon />
            </button>
            <button
              onMouseDown={() => {
                play();
              }}
              className="mr-2 h-16 w-16 cursor-pointer border-[1px] border-blue-400 bg-blue-500 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
            >
              <GearIcon />
            </button>
          </div>
          <div className="flex flex-col items-stretch justify-center">
            <Link
              onMouseDown={() => {
                play();
              }}
              to="/forum"
              className="block w-[80vw]"
            >
              <div className="font-heading border-primary bg-primary mr-2 flex h-16 w-full cursor-pointer items-center justify-center border-[1px] uppercase [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]">
                <div className="h-8 w-8">
                  <ChatIcon />
                </div>
                <div>Forum</div>
              </div>
            </Link>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
