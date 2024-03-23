import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import Faq from './components/Faq';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
         <Route index element={<Main/>}/>
         <Route path='/FAQ' element={<Faq/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
