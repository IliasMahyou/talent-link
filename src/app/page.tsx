"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import AnimatedBackground from "./components/AnimatedBackground";
import EasterEgg from "./components/EasterEgg";

export default function Home() {
  const totalEggs = 10; // Total eggs to find
  const [isPlaying, setIsPlaying] = useState(false);
  const [foundEggs, setFoundEggs] = useState(0);
  const [gameOver, setGameOver] = useState(false); // Track game over state

  const startGame = () => {
    setIsPlaying(true);
    setFoundEggs(0); // Reset the counter
    setGameOver(false); // Reset game over state
  };

  const stopGame = () => {
    setIsPlaying(false);
    setGameOver(false); // Reset the game-over state
  };

  const handleEggFound = () => {
    setFoundEggs((prev) => prev + 1);
    if (foundEggs + 1 === totalEggs) {
      // Stop the game when all eggs are found
      stopGame();
      setGameOver(true);
    }
  };

  return (
    <>
      <Navbar />
      <AnimatedBackground>
        <main className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 relative">
          {/* Title */}
          <Header
            title="The bridge between opportunity and talent."
            classDeco="text-white"
          />

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center my-20 gap-4">
            <Button
              label="I’m a Student"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-lg rounded-md text-white w-full sm:w-auto"
            />
            <Button
              label="I’m a Startup"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-lg rounded-md text-white w-full sm:w-auto"
            />
          </div>

          {/* Subtle Start/Stop Button */}
          <button
            onClick={isPlaying ? stopGame : startGame}
            className="absolute bottom-4 left-4 text-xs md:text-sm rounded-md text-white  z-50 px-3 py-2 transform transition-transform duration-300 hover:scale-150 "
            aria-label="Toggle Easter Egg Hunt"
          >
            {isPlaying ? "Stop Playing" : "Play"}
          </button>

          {/* Easter Eggs */}
          {isPlaying && (
            <div className="absolute inset-0">
              {Array.from({ length: totalEggs }).map((_, index) => (
                <EasterEgg key={index} onFound={handleEggFound} />
              ))}
            </div>
          )}

          {/* Found Eggs Counter */}
          {isPlaying && (
            <div className="absolute bottom-4 text-sm">
              {foundEggs} eggs found so far!
            </div>
          )}

          {/* Game Over Message */}
          {gameOver && (
            <div className="transform text-white my-5 px-6 py-4 rounded-lg  text-lg">
              🎉 Congratulations! You found all the eggs! 🎉
            </div>
          )}
        </main>
      </AnimatedBackground>
    </>
  );
}
