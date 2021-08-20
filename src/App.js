import './App.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import UserList from './Components/UserList/UserList';
import UserDetail from './Components/UserDetail/UserDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return(
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList}/>
          <Route path="/:id" exact render={(props)=><UserDetail {...props}/>}/>
        </Switch>
      </Router>
      
    </div>
    );
  
}

export default App;
