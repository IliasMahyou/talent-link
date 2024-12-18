import Navbar from "../../components/Navbar";
import LottieAnimation from "../../components/LottieAnitmation";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-color text-white flex items-center justify-center">
        {/* Wrapper Section for Header and Lottie */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6 md:p-12 space-y-8 md:space-y-0 md:space-x-8">
          {/* Left: Header Section */}
          <div className="w-full md:w-1/2 text-left">
            <Header title={"The Story Behind Hustlr"} classDeco="text-white animate-slideIn"/>
            <div className="mt-4 space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                Hustlr was born out of a simple idea:{" "}
                <span className="font-semibold">
                  What if students and startups could connect directly?
                </span>
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                As a student myself, I experienced how difficult it can be to
                find meaningful opportunities that match your skills and
                ambitions. And for startups? They’re constantly looking for
                passionate and talented people but don’t always have the
                resources to find them.
              </p>
              <p className="font-semibold text-blue-500">
                It’s not just a platform. It’s a bridge between opportunity and
                talent.
              </p>
            </div>
          </div>

          {/* Right: Larger Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <LottieAnimation
              src="/lottie/about-me.json"
              className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] max-w-full max-h-full"
              loop={false}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
