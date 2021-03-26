import { BrowserRouter, Switch, Route } from 'react-router-dom'

//  Routing
import PrivateRoute from './components/routing/PrivateRoute'

//  Screens
import PrivateScreen from './components/screens/private/PrivateScreen'
import LoginScreen from './components/screens/login/LoginScreen'
import RegisterScreen from './components/screens/register/RegisterScreen'
import ForgotPasswordScreen from './components/screens/forgotpassword/ForgotPasswordScreen'
import ResetPasswordScreen from './components/screens/resetpassword/ResetPasswordScreen'


import NavBar from "./components/subcomponents/navbar/Navbar"

import { ContextProvider } from "./context/Context"
import Component1 from "./context/Component1"
import Component2 from "./context/Component2"
import Component3 from "./context/Component3"
import { useState } from 'react'


const App = () => {

  //const [isAuth, setAuth] = useState(0);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen}/>
          <Route exact path="/navbar" component={NavBar}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
          <Route exact path="/resetpassword/:resetToken" component={ResetPasswordScreen}/>

          <ContextProvider>
            <Route exact path="/component3" component={Component3}/>
            <Route exact path="/component1" component={Component1}/>
            <Route exact path="/component2" component={Component2}/>
          </ContextProvider>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
