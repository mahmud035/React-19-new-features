export default function Button({ handleClick, children }) {
  console.log(`rendering button ${children}`);

  return (
    <p>
      <button
        className="p-3 text-white bg-blue-600 rounded"
        type="button"
        onClick={handleClick}
      >
        {children}
      </button>
    </p>
  );
}
