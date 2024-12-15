type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string;
  };
  
  export default function Button({ label, onClick, className }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`bg-black text-white px-10 py-7 rounded-md hover:bg-blue-700 transition ${className}`}
      >
        {label}
      </button>
    );
  }
  