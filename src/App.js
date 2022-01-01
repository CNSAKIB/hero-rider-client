import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Shared/Navigation/Navigation'
import Footer from './components/Shared/Footer/Footer'
import RiderRegister from './components/Register/RiderRegister';
import LearnerRegister from './components/Register/LearnerRegister';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Dashboard/Services/Services'
import Home from './components/Home/Home/Home';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <LearnerRegister></LearnerRegister>
            </Route>
            <Route path="/riderRegister">
              <RiderRegister></RiderRegister>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/">
              {/* <Home></Home> */}
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
