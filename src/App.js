import {Routes, Route} from 'react-router-dom'

import './App.css';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Leyout from "./components/Leyout/Leyout";
import User_details from "./components/user_details/User_details";
import User_Posts from "./components/userPosts/User_Posts";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Leyout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<User_details/>}>
                            <Route path={'posts'} element={<User_Posts/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
