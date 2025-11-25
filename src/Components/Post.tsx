import { posts } from "./blogData";
import { IoNotifications} from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";



const Post = () => {

  const navigate= useNavigate();

  return (
    <div className="flex justify-center min-h-screen bg-gray-250 p-6 pt-20 md:p-20 ">
      <div className="w-full md:w-[750px] bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow-lg">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-8 border-b pb-6 last:border-b-0 last:pb-0 transition hover:shadow-md rounded-lg p-4 dark:shadow-gray-700 "
          >
            {/* User Info */}
            <div className="flex items-center gap-3 ">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-sm"
              />
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  {post.user.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-200">@{post.user.username}</p>
              </div>
            </div>

            {/* Title + Description */}
            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
              {post.title}
            </h3>
            <p className="text-gray-700 mt-1 leading-relaxed dark:text-gray-300">
              {post.description}
            </p>

            {/* Post Media */}
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="mt-4 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
              />
            )}

            {/* Link */}
            <a
              href={post.postLink}
              className="text-blue-600 text-sm mt-3 inline-block font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Post →
            </a>

            {/* Stats */}
            <div className="flex justify-between text-sm text-gray-600 mt-4 dark:text-white border-t pt-2">
              <span className="flex items-center gap-1">
                👍 <span className="font-medium">{post.likes}</span> Likes
              </span>
              <span className="flex items-center gap-1">
                💬 <span className="font-medium">{post.comments}</span> Comments
              </span>
              <span className="text-gray-500 dark:text-white">
                {new Date(post.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <footer className="fixed bottom-0 w-full md:w-4/5 lg:w-[750px] flex justify-between items-end h-20 dark:text-white">
        <button className="bg-white dark:bg-gray-800  w-[205px] sm:w-[330px] h-16 rounded-tl-3xl rounded-tr-full shadow-gray-200 border-t-6 border-gray-400 dark:border-blue-400 p-2 flex items-center justify-center hover:border-gray-500 dark:hover:border-blue-500"><IoNotifications className="text-3xl dark:font-light"/></button>
        <button className="bg-white dark:bg-gray-800 h-20 w-20 rounded-full shadow-gray-200 border-4 dark:border-blue-600 border-gray-500 p-2 flex items-center justify-center hover:scale-[1.02] hover:shadow-md dark:hover:shadow-blue-400 hover:shadow-gray-800"><MdAdd className="text-3xl dark:font-light"/></button>
        <button onClick={()=> navigate("/AiTutor")} className="bg-white dark:bg-gray-800 w-[205px] sm:w-[330px] h-16 rounded-tl-full shadow-gray-200 border-t-6 border-gray-400 dark:border-blue-400 p-2 flex items-center justify-center hover:border-gray-500 dark:hover:border-blue-500"><FaRobot className="text-3xl dark:font-light"/></button>
      </footer>
    </div>
  );
};

export default Post;
