import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>BOOK COMMUTE</h1>
      </header>
      <header>
        <span>
          <button>Login</button>
        </span>
        <span>
          <button></button>
        </span>
      </header>
      <div>
        <h2>Welcome to Your Ultimate Book Companion</h2>
        <p>
          Discover a revolutionary way to explore the world of books! Our intelligent bot is here to answer your questions, summarize your favorite reads, and provide in-depth insights into countless books across various genres and subjects.
        </p>
        <h2>What Can You Do Here?</h2>
        <ul>
          <li><strong>Get Book Summaries:</strong> Quickly understand the essence of any book, whether it's fiction, non-fiction, self-help, or academic.</li>
          <li><strong>Ask Detailed Questions:</strong> Stuck on a concept or want to know more about a character or plot? Our bot has you covered.</li>
          <li><strong>Explore New Reads:</strong> Dive into fresh recommendations based on your preferences and discover your next favorite book.</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          Our platform is powered by advanced AI, offering accurate, concise, and user-friendly responses tailored to your needs. Whether you're a student, an avid reader, or just curious, this is your go-to place for all things books.
        </p>
        <h2>Start Your Journey</h2>
        <p>
          Enter the world of limitless knowledge today. Simply type your question or book title, and let our bot guide you!
        </p>
       
      </div>
    </>
  );
}

export default App;