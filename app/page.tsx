"use client";

import React, { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState(
    `I'm not a great programmer. I'm just a good programmer with great habits.`
  );
  const [author, setAuthor] = useState("Kent Beck");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();

      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error(error);
    }
  };

  const postOnTwitter = () => {
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    return tweetLink;
  };
  return (
    <main className="flex min-h-screen flex-col items-center m-auto p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Random Quote Generator
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <span>Jeremy Dudet</span>
          </a>
        </div>
      </div>
      <div
        id="quote-box"
        className="max-w-xl flex flex-col border-red-50 border-2 w-full h-600px my-auto px-8 py-4"
      >
        <div className="flex w-full flex-wrap justify-center ">
          <span
            id="text"
            className="text-2xl text-center h-auto align-baseline"
          >
            <span className="align-baseline text-4xl mr-2 font-serif">{`"`}</span>
            {quote}
          </span>
        </div>
        <div className="flex w-full flex-wrap justify-end">
          <span>-</span>
          <span id="author">{author}</span>
        </div>
        <div className="flex justify-between pt-4">
          <a href={postOnTwitter()} id="tweet-quote">
            Twitter
          </a>
          <button onClick={fetchQuote} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </main>
  );
}
