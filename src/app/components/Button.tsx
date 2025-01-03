type ButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-black text-white px-10 py-7 rounded-md hover:bg-blue-700 transition delay-250 ${className}`}
      aria-label={label}
    >
      {label}
    </button>
  );
}
