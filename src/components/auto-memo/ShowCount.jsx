export default function ShowCount({ title, count }) {
  console.log(`rendering ${title}....`);

  return (
    <div className="p-5 border border-gray-300 rounded bg-emerald-50">
      {title} is {count}
    </div>
  );
}
