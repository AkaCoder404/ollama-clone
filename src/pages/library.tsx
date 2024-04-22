"use client";
import React, { useState } from "react";
import Image from "next/image";

// Components
import logo from "@/../public/ollama.png";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ModelCard from "@/components/modelcard";

const mainPage = "flex min-h-screen flex-col justify-between";
const libraryMain =
  "mx-auto flex w-full max-w-[50rem] flex-col px-6 py-10 md:py-24 lg:px-8";

const largeSelectDiv = "flex flex-row space-x-1 sm:flex-shrink-0 sm:space-x-3";
const largeSelectDivSelect =
  "w-full flex-1 items-center justify-between gap-x-4 rounded-lg border-neutral-200 bg-white text-left text-sm font-medium text-neutral-900 hover:bg-neutral-50 sm:flex sm:w-48";

interface ModelInfo {
  name: String;
  description: String;
  pulls: String;
  tags: String;
  updated: String;
}

const data: ModelInfo[] = [
  {
    name: "llama3",
    description: "Meta Llama 3: The most capable openly available LLM to date",
    pulls: "182.1K",
    tags: "66",
    updated: "3 days ago",
  },
  {
    name: "wizardlm2",
    description:
      "State of the art large language model from Microsoft AI with improved performance on complex chat, multilingual, reasoning and agent use cases",
    pulls: "21.6K",
    tags: "22",
    updated: "5 days ago",
  },
  {
    name: "mistral",
    description: "The 7B model released by Mistral AI, updated to version 0.2.",
    pulls: "624.0K",
    tags: "68",
    updated: "4 weeks ago",
  },
];

export default function Library() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchKeyDown = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <main className={mainPage}>
      <Header />
      <div className={libraryMain}>
        <h1 className="flex truncate text-[28px] font-medium tracking-tight pb-12">
          <div className="flex flex-row space-x-3 items-center">
            <Image
              src={logo}
              alt="ollama image"
              className="h-12 w-12 flex-none border border-neutral-300 rounded-full bg-white object-contain"
            />
            <div className="text-black">Models</div>
          </div>
        </h1>
        <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0">
          <div className="flex-1">
            <input
              id="filter"
              name="q"
              type="text"
              value={searchValue}
              onChange={handleSearchKeyDown}
              hx-get="/library"
              hx-trigger="keyup changed delay:250ms"
              hx-target="#repo"
              className="relative w-full resize-none rounded-md border border-neutral-200 text-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-75 text-black"
              placeholder="Filter by name..."
              hx-include="#filter, #sort"
              hx-sync="this:replace"
            />
          </div>
          <div className={largeSelectDiv}>
            <select
              name="sort"
              id="sort"
              className={largeSelectDivSelect}
              hx-get="/library"
              hx-trigger="change"
              hx-target="#repo"
              hx-include="#filter, #sort"
            >
              <option disabled={false} value="">
                Sort By
              </option>
              <option value="featured" defaultValue="">
                Featured
              </option>
              <option value="popular">Most popular</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
        {data.map((item: ModelInfo, index) => (
          <ModelCard key={index} {...item} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
