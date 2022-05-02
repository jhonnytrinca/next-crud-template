interface ButtonProps {
  children: any;
  className?: string;
  onClick?: () => void;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`bg-gradient-to-r text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
