import "./App.css";
import React, { useState } from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  const shareOnWhatsApp = () => {
    const text = quote.author + " once said: " + quote.content;
    const url = "whatsapp://send?text=" + encodeURIComponent(text);
    window.open(url);
  };

  const shareOnTwitter = () => {
    const text = quote.author + " once said: " + quote.content;
    const url =
      "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    window.open(url);
  };

  const shareOnFacebook = () => {
    //  facebook does not accept text only accept URL so when you click this btn will share the page it self
    //  so it not gonna work if you try it in local host but it's gonna work if it have a proper URL      ___MostafaKhidr-dev
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(window.location.href);
    window.open(url);
  };

  const shareOnReddit = () => {
    // in Reddit btn i had to break down my var so i can adjust it for the reddit URL    ___MostafaKhidr-dev
    const title = "Quote by " + quote.author;
    const text = quote.content;
    const redditUrl =
      "https://www.reddit.com/submit?title=" +
      encodeURIComponent(title) +
      "&text=" +
      encodeURIComponent(text);
    window.open(redditUrl);
  };
  // i put the social media buttons in another div so i can display it as flex items    ___MostafaKhider-dev
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="social-btn">
          <button onClick={shareOnTwitter} className="share-btn twitter-btn">
            Twitter
          </button>
          <button onClick={shareOnWhatsApp} className="share-btn whatsapp-btn">
            WhatsApp
          </button>
          <button onClick={shareOnReddit} className="share-btn reddit-btn">
            Reddit
          </button>
          <button onClick={shareOnFacebook} className="share-btn facebook-btn">
            Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
