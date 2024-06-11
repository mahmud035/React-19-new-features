import { useEffect, useState } from 'react';

export default function Joke() {
  const [joke, setJoke] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await res.json();
        setJoke(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  if (loading) {
    return (
      <h2 className="p-4 mt-5 text-xl font-bold text-center shadow bg-gray-50">
        Loading...
      </h2>
    );
  }

  return (
    <div className="p-4 my-6 rounded shadow bg-emerald-50">
      <h2 className="text-xl italic font-medium text-neutral-900">
        {joke.value}
      </h2>
    </div>
  );
}
