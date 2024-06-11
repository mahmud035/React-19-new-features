import { useRef, useState } from 'react';

// PostItem component
const PostItem = ({ post }) => {
  return (
    <div className="p-4 my-6 border border-gray-200 rounded-lg bg-emerald-50">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

// PostForm component
const PostForm = ({ addPost }) => {
  const formRef = useRef(null);

  const formAction = async (formData) => {
    // delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newPost = {
      title: formData.get('title'),
      body: formData.get('body'),
    };

    addPost(newPost);
    formRef.current.reset(); // reset form
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      className="px-8 pt-6 pb-8 mb-4 bg-white border border-gray-200 rounded"
    >
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none"
          id="title"
          type="text"
          placeholder="Enter title"
          name="title"
        />
      </div>
      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="body"
        >
          Body
        </label>
        <textarea
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-200 rounded appearance-none focus:outline-none"
          id="body"
          rows="5"
          placeholder="Enter body"
          name="body"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:bg-gray-400"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// Posts component
export default function Posts() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <PostForm addPost={addPost} />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </>
  );
}
