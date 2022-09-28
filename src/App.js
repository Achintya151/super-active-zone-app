import './App.css';
import Exercises from './component/Exercises/Exercises';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';


function App() {
  return (
    <div className="row">
      <div className='col-9 bg-success'>
        <Header></Header>
        <Exercises></Exercises>
      </div>
      <div className='col-3'>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
