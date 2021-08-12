
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Navb from './Navb';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navb/>
     <Route path="/Class">
     <ClassComponent/>
     </Route>
     <Route path="/Function">
     <FunctionComponent/>
     </Route>
      
     
     
      
    </div>
    </BrowserRouter>
  );
}

export default App;
