import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';

import { BrowserRouter, Routes, Route ,Navigate, Router} from 'react-router-dom'
import BlogEdit from './pages/BlogEdit/BlogEdit';
import BlogDisplay from './pages/BlogDisplay/BlogDisplay';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blog/:id' element={<BlogDisplay/>} />
          <Route path='/addBlog' element={<BlogEdit/>}/>
      </Routes>
      {/* <Home /> */}
      {/* <Blog/> */}
      {/* <BlogDisplay/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
