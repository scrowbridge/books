//import {Posts} from './components/Posts/Posts';
import {Books} from './components/Books/Books';
import './App.scss';
import {SearchPosts} from "./components/SearchPosts/SearchPosts";
import {useState} from "react";

function App() {
    // defining state in a functional component
    //   state , setState()     default value
    const [posts, setPosts] = useState([]);

  return (
    <div className="App">
<<<<<<< HEAD
        <h1>Books</h1>
        <Books />
=======
        <h1>Fancy Posts</h1>
        <SearchPosts onSearchResult={(results) => setPosts(results)} />
        <hr/>
      <Posts posts={posts} />
>>>>>>> demo-2
    </div>
  );
}

export default App;