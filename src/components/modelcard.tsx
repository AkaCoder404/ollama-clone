"use client";
import React, { useState } from "react";
import Link from "next/link";

interface ModelInfo {
  name: String;
  description: String;
  pulls: String;
  tags: String;
  updated: String;
}

export default function ModelCard(props: ModelInfo) {
  const { name, description, pulls, tags, updated } = props;

  return (
    <li className="flex items-baseline border-b border-neutral-200 py-6">
      <Link href={`/library/${name}`} className="group w-full">
        <h2 className="mb-3 truncate text-lg font-medium underline-offset-2 group-hover:underline md:text-2xl text-black">
          {name}
        </h2>

        <p className="mb-4 max-w-md break-words text-black">{description}</p>

        <p className="my-2 flex space-x-5 text-[13px] font-medium text-neutral-500">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              ></path>
            </svg>
            {pulls}
            <span className="hidden sm:flex">&nbsp;Pulls</span>
          </span>

          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              ></path>
            </svg>
            {tags}
            <span className="hidden sm:flex">&nbsp;Tags</span>
          </span>

          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mr-1.5 h-[14px] w-[14px] sm:h-4 sm:w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <span className="hidden sm:flex">Updated&nbsp;</span>
            {updated}
          </span>
        </p>
      </Link>
    </li>
  );
}
