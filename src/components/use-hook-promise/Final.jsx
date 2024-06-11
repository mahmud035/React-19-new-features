import { Suspense, use, useState } from 'react';

// const fetchMessage = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('🚀');
//     }, 1000);
//   });
// };

const fetchMessage = async () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, '🚀'));
};

// MessageOutput component
const MessageOutput = ({ messagePromise }) => {
  const messageContent = use(messagePromise); // read promise value

  return <p className="text-xl"> Here is the message: {messageContent} </p>;
};

// MessageContainer component
const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p className="text-xl">⌛ Downloading message...</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

// Message component
const Message = () => {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);

  const handleDownload = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };

  return (
    <>
      {show ? (
        <MessageContainer messagePromise={messagePromise} />
      ) : (
        <button
          onClick={handleDownload}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Download message
        </button>
      )}
    </>
  );
};

export default Message;
