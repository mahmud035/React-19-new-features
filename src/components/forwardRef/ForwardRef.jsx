import { useEffect, useRef } from 'react';

function Input({ ref }) {
  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <div>
      <input
        ref={ref}
        className="w-1/2 px-3 py-2 border border-gray-500 rounded"
        type="text"
      />
    </div>
  );
}

export default function InputContainer() {
  const ref = useRef(null);

  return <Input ref={ref} />;
}
