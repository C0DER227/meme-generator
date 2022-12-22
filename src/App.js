import {Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './Pages/Home';
import EditPage from './Pages/Edit';


function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Meme Generator</h1>
      <Routes>
       <Route  path='/' element={<HomePage/>}/>
       <Route path='/edit' element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
