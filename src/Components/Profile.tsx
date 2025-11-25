
const Profile = ()=>{
    return (<div className="pt-16 px-6">
          {/* Profile image */}
          <div className="flex justify-center gap-5 p-2 items-center">
            <img 
            className="h-35 w-35 rounded-full border-4 border-gray-100 shadow-lg-gray-200"
            src="https://randomuser.me/api/portraits/men/39.jpg" alt="Profile picture" />
            <div className="font-bold  items-center flex flex-col p-5 gap-2">
                <div className="text-3xl mt-5 dark:text-gray-600">Abhay Singh</div>
                <div className="text-gray-600 dark:text-gray-400">@Abhay_Singh</div>
                <div className="flex text-center justify-center">
                <p className="w-4/5 md:w-3/5 lg:w-4/5 xl:w-5/6 text-gray-500 dark:text-gray-400">This is my first page. I love to do these kinds of works what are ou doing here.</p>
            </div>
            </div>
          </div>
            
            {/* Bio */}
            
             
             {/* Menus */}
             <div className="flex justify-center gap-4 items-center p-3">
                <a href="#"><img className="h-8" src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="home" /></a>
                <a href="#"><img className="h-8" src="https://cdn-icons-png.flaticon.com/128/9511/9511671.png" alt="saved" /></a>
                <a href="#"><img className="h-8" src="https://cdn-icons-png.flaticon.com/128/1077/1077086.png" alt="liked" /></a>
             </div>

            {/* Your Posts */}
            <div className="mt-1 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 items-start h-[440px] w-full px-2 overflow-y-hidden">
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/42.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/43.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/44.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/45.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/46.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/47.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/48.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/49.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/50.jpg" alt="posts" />
                <img 
                className="h-40 md:h-60 rounded-lg border-2 border-gray-200 shadow-lg"
                src="https://randomuser.me/api/portraits/men/52.jpg" alt="posts" />
            </div>

        </div>)
}

export default Profile;