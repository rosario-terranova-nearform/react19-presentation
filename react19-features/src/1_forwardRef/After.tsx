import { useRef } from "react";

export const After = () => {
  const inputRef = useRef<HTMLInputElement>(null); //step 1: create a ref

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <CustomInput
        ref={inputRef} //step 2: pass the ref to the component
        label="Enter text"
        placeholder="Type something..."
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

interface InputProps {
  label: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.Ref<HTMLInputElement>; //step 3: use ref as a prop
}

const CustomInput = ({ label, placeholder, onChange, ref }: InputProps) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default After;
