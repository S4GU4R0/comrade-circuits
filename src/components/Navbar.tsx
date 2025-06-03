import "react-modern-drawer/dist/index.css";

import React, { useState } from "react";

import { ChatIcon, GearIcon, ShoppingBagIcon } from "@components/icons";
import Themed3DButton from "@components/Themed3DButton";
import { Link } from "@tanstack/react-router";
import Drawer from "react-modern-drawer";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
          <button className="btn btn-ghost btn-circle" onClick={toggleDrawer}>
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
            <Themed3DButton color="secondary" className="h-16 w-16">
              <ShoppingBagIcon />
            </Themed3DButton>
            <Themed3DButton color="accent" className="h-16 w-16">
              <GearIcon />
            </Themed3DButton>
          </div>
          <div className="flex flex-col items-stretch justify-center">
            <Themed3DButton
              as="a"
              href="/forum"
              color="primary"
              className="font-heading border-primary bg-primary flex h-16 w-full items-center justify-center uppercase"
            >
              <div className="h-8 w-8">
                <ChatIcon />
              </div>
              <div>Forum</div>
            </Themed3DButton>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
