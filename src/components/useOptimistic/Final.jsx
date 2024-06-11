import { useOptimistic, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-1 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send'}
    </button>
  );
};

const MessageForm = ({ sendMessage, addOptimisticMessages }) => {
  const formRef = useRef(null);

  const formAction = async (formData) => {
    addOptimisticMessages(formData.get('message'));
    await sendMessage(formData);
    formRef.current.reset();
  };

  return (
    <form action={formAction} ref={formRef} className="flex items-center mb-5">
      <input
        type="text"
        name="message"
        placeholder="Hello!"
        className="px-2 py-1 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      <Button />
    </form>
  );
};

const Thread = ({ messages, sendMessage }) => {
  const [optimisticMessages, addOptimisticMessages] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <div>
      <MessageForm
        sendMessage={sendMessage}
        addOptimisticMessages={addOptimisticMessages}
      />

      {optimisticMessages.map((message, index) => (
        <div key={index} className="flex items-center">
          <span>{message.text}</span>
          {message.sending && <small className="ml-2 animate-spin">⌛</small>}
        </div>
      ))}
    </div>
  );
};

const deliverMessage = async (message) => {
  // delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return message;
};

export default function MessageBox() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (formData) => {
    const sentMessage = await deliverMessage(formData.get('message'));

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: sentMessage,
      },
    ]);
  };

  return <Thread messages={messages} sendMessage={sendMessage} />;
}
