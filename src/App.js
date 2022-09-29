import './App.css';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
function App() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
