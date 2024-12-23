type Types = {
  title: string; // Properly define the `title` property
  classDeco?: string; // Optional property for extra styles
};

export default function Header({ title, classDeco }: Types) {
  return (
    <h3
      className={`text-6xl font-bold opacity-100 w-2/3 ${
        classDeco || "text-left text-white"
      }`}
    >
      {title}
    </h3>
  );
}
