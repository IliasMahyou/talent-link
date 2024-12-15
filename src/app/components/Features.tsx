const features = [
    {
      title: "Easy to Connect",
      description: "Find and connect with startups in just a few clicks.",
      icon: "🌐", // Emoji or replace with an actual icon
    },
    {
      title: "Tailored Matches",
      description: "We suggest opportunities that fit your skills and goals.",
      icon: "🎯",
    },
    {
      title: "Trusted Startups",
      description: "Work with vetted and growing companies.",
      icon: "🤝",
    },
  ];
  
  
  export default function Features() {
    return (
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Why use Hustlr?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  