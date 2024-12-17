export default function Header({ title }: { title: string }) {
  return (
    <h3 className="text-6xl text-white font-bold opacity-100 w-2/3">
      {title}
    </h3>
  );
}