import Header from './components/Header';
import Quotes from './components/Quotes';
import Features from './components/Features';
import Button from './components/Button';
import Navbar from './components/Navbar';
import LottieAnimation from './components/LottieAnitmation';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* Top Section: Header (Left) and Lottie Animation (Right) */}
        <div className="flex-1 flex items-center ">
          {/* Header (Left-Aligned) */}
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <Header />
              <Quotes />
            </div>
          </div>
          {/* Lottie Animation (Right-Aligned) */}
          <div className="flex justify-center w-1/2">
            <LottieAnimation
              src="/lottie/lottie-animation.json"
              className="w-3/4 h-auto max-w-full max-h-full"
            />
          </div>
        </div>

        {/* Bottom Section: Features and Buttons */}
        <div className="flex-1 flex flex-col justify-center bg-white text-black p-6">
          <Features />
          <div className="flex mt-8 justify-center my-5">
            <Button label="I’m a Student" />
            <Button
              label="I’m a Startup"
              className="ml-4 hover:bg-purple-700"
            />
          </div>
        </div>
      </main>
    </>
  );
}
