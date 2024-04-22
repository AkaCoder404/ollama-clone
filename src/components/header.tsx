"use client";
import "../app/globals.css";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/../public/ollama.png";

//  CSS
const largePageHeader =
  "hidden select-none mx-auto md:flex justify-between items-center px-6 py-3.5 text-md md:text-lg";
const smallPageHeader =
  "sticky top-0 md:static bg-white underline-offset-4 z-40";
const smallPageHeaderNav =
  "flex w-full px-6 py-4 items-center justify-between md:hidden";
const smallPageHeaderNavLink = "z-50";
const smallPageHeaderLabel = "pper-checked:hidden cursor-pointer z-50";
const smallPageHeaderLabelSVG = "h-8 w-8";
const smallPageHeaderMenu =
  "peer-checked:flex fixed bg-white hidden top-0 pt-24 h-screen right-0 w-full sm:hidden flex-col px-6 py-4 text-3xl space-y-6 tracking-tight text-black";

export default function Header() {
  const [menuOpenColor, setMenuOpenColor] = useState("black");
  const [menuCloseColor, setMenuCloseColor] = useState("black");
  const [menuState, setMenuState] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const onOpenSmallMenu = () => {
    if (menuState) {
      setMenuOpenColor("transparent");
      setMenuCloseColor("black");
    }
    if (!menuState) {
      setMenuOpenColor("black");
      setMenuCloseColor("transparent");
    }
    setMenuState(!menuState);
  };

  // const handleOnInputClick = () => {};
  const handleOnInputKeyDown = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <header className={smallPageHeader}>
      {/* Large Size */}
      <nav className={largePageHeader}>
        <div className="flex items-center space-x-8 text-black">
          <a className="mr-2" href="/">
            <Image src={logo} alt="ollama Logo" width={32} />
          </a>
          <a className="hover:underline" href="/blog">
            Blog
          </a>
          <a
            className="hover:underline"
            target="_blank"
            href="https://discord.com/invite/ollama"
          >
            Discord
          </a>
          <a
            className="hover:underline"
            target="_blank"
            href="https://github.com/ollama/ollama"
          >
            GitHub
          </a>
        </div>
        <div className="flex space-x-8 items-center text-black">
          <div className="hidden lg:flex items-center flex-grow relative w-full max-w-[500px] pl-8">
            <div
              id="searchContainer"
              className="relative flex items-center rounded-lg border border-neutral-200"
            >
              <span id="searchIcon" className="pl-2 text-2xl text-neutral-500">
                <svg
                  className="w-4 h-4 ml-1 mt-0.25 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m8.5 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.24832096-.4158777 2.3995085-1.1166416 3.3225711l4.1469717 4.1470988c.2928932.2928932.2928932.767767 0 1.0606602-.2662666.2662665-.6829303.2904726-.9765418.0726181l-.0841184-.0726181-4.1470988-4.1469717c-.9230626.7007639-2.07425014 1.1166416-3.3225711 1.1166416-3.03756612 0-5.5-2.4624339-5.5-5.5 0-3.03756612 2.46243388-5.5 5.5-5.5zm0 1.5c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4z"></path>
                </svg>
              </span>
              <input
                id="search"
                hx-get="/search-preview"
                hx-trigger="keyup changed delay:800ms, focus"
                hx-target="#popup"
                name="q"
                className="w-full resize-none rounded-lg border-0 py-1.5 pr-10 text-sm
                        focus:outline-none focus:ring-0"
                placeholder="Search models"
                autoComplete="off"
                value={inputValue}
                // onClick={handleOnInputClick}
                onChange={(e) => handleOnInputKeyDown(e)}
                onKeyDown={(e) => handleOnInputKeyDown(e)}
              />
              <div
                id="popup"
                className="absolute hidden left-0 right-0 top-full z-50"
              ></div>
            </div>
          </div>
          <a className="hover:underline" href="/library">
            Models
          </a>
          <a className="hover:underline min-w-fit" href="/login">
            Sign in
          </a>
          <a
            className="flex cursor-pointer items-center rounded-lg bg-neutral-800 px-4 py-1 text-white hover:bg-black"
            href="/download"
          >
            Download
          </a>
        </div>
      </nav>
      {/* Mobile Size */}
      <nav className={smallPageHeaderNav}>
        <a href="/" className={smallPageHeaderNavLink}>
          <Image src={logo} alt="ollama Logo" width={24} />
        </a>
        <input type="checkbox" id="menu" className="hidden peer" />

        {/* Menu Icon */}
        <label
          className={smallPageHeaderLabel}
          htmlFor="menu"
          onClick={onOpenSmallMenu}
        >
          <svg
            className={smallPageHeaderLabelSVG}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={menuOpenColor}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </label>

        {/* Exit out of Menu Icon */}
        <label
          htmlFor="menu"
          className="hidden peer-checked:block cursor-pointer z-50"
          onClick={onOpenSmallMenu}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={menuCloseColor}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </label>

        <div className={smallPageHeaderMenu}>
          <a href="/libray">Models</a>
          <a href="/search">Search</a>
          <a href="https://discord.com/invite/ollama">Discord</a>
          <a href="https://github.com/ollama/ollama">Github</a>
          <a href="/download">Download</a>
          <a className="block" href="/login">
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
}
