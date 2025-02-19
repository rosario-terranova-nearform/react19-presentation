import { forwardRef, ForwardedRef, useRef } from "react";

export const Before = () => {
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
}

const CustomInput = forwardRef(
  //step 3: wrap the component with forwardRef
  (
    { label, placeholder, onChange }: InputProps,
    ref: ForwardedRef<HTMLInputElement> //step 4: accept the ref as a prop
  ) => {
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
  }
);

export default Before;
