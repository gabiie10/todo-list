import './App.css';
import Post from './pages/Post/post';
import Edit from './pages/Edit/edit';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Feed from './pages/Feed/feed';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed/>}/>      
        <Route path="/post" element={<Post/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </Router>
     </div>
  );
};

export default App;
