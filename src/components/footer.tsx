"use client";
import "../app/globals.css";
import React, { useState } from "react";

const smallPageFooter = "inset-x-0 flex bottom-9 md:hidden py-4 bg-white";
const smallPageFooterLi = "mx-2 my-1";

export default function Footer() {
  return (
    <>
      {/* Large Size Footer */}
      <footer className="hidden md:flex inset-x-0 bottom-0 bg-white underline-offset-4 z-50">
        <div className="w-full px-6 py-3.5 flex items-center justify-between">
          <div className="text-xs text-neutral-500">© 2024 Ollama</div>
          <div className="flex space-x-6 text-xs text-neutral-500">
            <a href="/blog" className="hover:underline">
              Blog
            </a>
            <a
              href="https://github.com/ollama/ollama/tree/main/docs"
              className="hover:underline"
            >
              Docs
            </a>
            <a
              href="https://github.com/ollama/ollama"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://discord.com/invite/ollama"
              className="hover:underline"
            >
              Discord
            </a>
            <a href="https://twitter.com/ollama" className="hover:underline">
              X (Twitter)
            </a>
            <a href="https://lu.ma/ollama" className="hover:underline">
              Meetups
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className={smallPageFooter}>
        <div className="flex flex-col items-center justify-center w-full">
          <ul className="flex flex-wrap justify-center itemscenter text-sm text-neutral-500">
            <li className={smallPageFooterLi}>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li className={smallPageFooterLi}>
              <a
                className="hover:underline"
                href="https://github.com/ollama/ollama/tree/main/docs"
              >
                Docs
              </a>
            </li>
            <li className={smallPageFooterLi}>
              <a
                href="https://github.com/ollama/ollama"
                className="hover:underline"
              >
                Github
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center itemscenter text-sm text-neutral-500">
            <li className={smallPageFooterLi}>
              <a
                className="hover:underline"
                href="https://discord.com/invite/ollama"
              >
                Discord
              </a>
            </li>
            <li className={smallPageFooterLi}>
              <a className="hover:underline" href="https://twitter.com/ollama">
                X (Twitter)
              </a>
            </li>
            <li className={smallPageFooterLi}>
              <a className="hover:underline" href="https://lu.ma/ollama">
                Meetups
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center mt-2 text-neutral-500 text-sm">
            © 2024 Ollama
          </div>
        </div>
      </footer>
    </>
  );
}
