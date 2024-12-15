const quotes = [
  { text: "Great opportunities await those who seek them.", delay: "0s" },
  { text: "Start small, dream big, and connect here.", delay: "2s" },
  { text: "Your journey to success begins now.", delay: "4s" },
];

export default function Quotes() {
  return (
    <div className="flex flex-col items-end space-y-2 w-full">
      {quotes.map((quote, index) => (
        <p
          key={index}
          className="text-2xl font-medium text-white text-left opacity-0 animate-fade w-3/4"
          style={{
            animationDelay: quote.delay,
            animationDuration: "12s",
          }}
        >
          {quote.text}
        </p>
      ))}
    </div>
  );
}
