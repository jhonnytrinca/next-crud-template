interface InputProps {
  text: string;
  type?: 'text' | 'number';
  value: string | number;
  readOnly?: boolean;
  onChange?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className='flex flex-col mb-3'>
      <label className='mb-2'>{props.text}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        readOnly={props.readOnly}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-grey-100 px-4 py-2 ${
          props.readOnly ? '' : 'focus:bg-white'
        }`}
        onChange={(e) => props.onChange?.(e.target.value)}
      />
    </div>
  );
}
