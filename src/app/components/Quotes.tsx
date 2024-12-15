const quotes = [
    { text: "Great opportunities await those who seek them.", delay: "0s" },
    { text: "Start small, dream big, and connect here.", delay: "2s" },
    { text: "Your journey to success begins now.", delay: "4s" },
  ];
  
  export default function Quotes() {
    return (
      <div className="flex-1 flex flex-col justify-center items-end space-y-8 pr-10 relative">
        {quotes.map((quote, index) => (
          <p
            key={index}
            className="text-2xl font-medium text-white opacity-0 animate-fade"
            style={{
                animationDelay: quote.delay, // Ensure the next quote waits for the previous
                animationDuration: "12s", // Total cycle time for all quotes (3 quotes * 12s)
              }}
          >
            {quote.text}
          </p>
        ))}
      </div>
    );
  }
  