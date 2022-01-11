import './App.css';
import Users from "./Components/Users/Users";
import {Posts} from "./Components/posts/Posts";
import Comments from "./Components/comments/Comments";


function App() {
  return (
    <div>
        <div className={'User'}><Users/> </div>
        <div className={'Post'}><Posts/></div>
        <div className={'Comments'}><Comments/></div>
    </div>
  );
}

export default App;
