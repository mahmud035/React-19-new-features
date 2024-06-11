import { Suspense, use } from 'react';

const fetchJokes = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return res.json(); // returns a promise
};

const JokeItem = () => {
  const joke = use(fetchJokes()); // read promise value

  return (
    <h2 className="text-xl italic font-medium text-neutral-900">
      {joke.value}
    </h2>
  );
};

export default function Joke() {
  return (
    <div className="p-4 my-6 rounded shadow bg-emerald-50">
      <Suspense
        fallback={
          <h2 className="p-4 mt-5 text-xl font-bold text-center shadow bg-gray-50">
            Loading...
          </h2>
        }
      >
        <JokeItem />
      </Suspense>
    </div>
  );
}
