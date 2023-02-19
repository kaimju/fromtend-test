import React, { useEffect, useState } from "react";
// import { User } from "./components/User";
// import { AddUser } from "./components/AddUser";
// import "./styles.css";
import { AddUser } from "@/components/addpost";
import { Post } from "@/components/post";
import axios from "axios";
import { data } from "autoprefixer";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1)
  
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
  const pagination = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;
  useEffect(() => {

    const getPosts = async () => {
      const { data: res } = await axios.get(pagination);
      setPosts(res);
    };
    getPosts();
  }, []); 

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/" + post.id + post); 
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  
  const addPost = async () => {
    const post = { title: "New Post", body: "new" };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
  };
  
  const handleUpdate = async (post) => {
    post.title = "Updated";
    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };
console.log(page)

  if (posts.length === 0) return <h2 className="text-center text-6xl"> loading </h2>;
  return (
    <div className="App">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">List Post</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, eaque?</p>
        <button
          className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={addPost}
        >
          Add Post
        </button>
      </div>
      <section className="bg-white  py-10">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-blue-700 text-center">
                      <th className="  py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        #
                      </th>
                      <th className="w-f  border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        TITLE
                      </th>
                      <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id}>
                        <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-2 px-2 text-center text-base font-medium">
                          {post.id}
                        </td>
                        <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-2 px-10  text-base font-medium">
                          {post.title}
                        </td>

                        <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-2 px-2 text-center text-base font-medium space-x-3">
                          <button
                            onClick={() => handleUpdate(post)}
                            className="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            edit
                          </button>
                          <button
                            onClick={() => handleDelete(post)}
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="">

                  <button
                    onClick={() => setPage(page -1)}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    back
                  </button>
                  <button
                    onClick={() => setPage(page + 1)}
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

