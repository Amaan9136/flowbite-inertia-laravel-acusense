import { forwardRef, useRef } from "react";

const FileInput = forwardRef(({ id, name, className = "", onChange, ...props }, ref) => {
  const localRef = useRef(null);

  return (
    <input
      id={id}
      name={name}
      type="file"
      onChange={onChange}
      ref={ref || localRef}
      className={`mt-1 block w-full text-gray-900 ${className}`}
      {...props}
    />
  );
});

export default FileInput;
