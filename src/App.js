import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css';
import { StudentList } from "./StudentList";


function App() {
  return (    
      <div className="container text-center">
        <StudentList />
      </div>
   
  );
}

export default App;
