const MessageForm = () => {
  return (
    <form className="flex items-center mb-5">
      <input
        type="text"
        name="message"
        placeholder="Hello!"
        className="px-2 py-1 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-1 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400"
      >
        Send
      </button>
    </form>
  );
};

const Thread = () => {
  return (
    <div>
      <MessageForm />
      <div className="flex items-center">
        <span>Message text</span>
        <small className="ml-2 animate-spin">⌛</small>
      </div>
    </div>
  );
};

export default function MessageBox() {
  return <Thread />;
}
