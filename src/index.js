import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from './Login/views/Login'
import Register from './Register/views/Register'
import Landing from "./Landing/views/Landing";
import PaymentForm from "./Payment/PaymentForm";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import Pricing from "./Pricingplan/Pricing";
// import Bedcrump from "./SearchProperty/Bedcrump";
import Contact from './Contact/Contact'
import Blog from './Blog/Welcome/Blog'
// import Search from './Search/Search'
import Details from './Search/pages/Details/index'
import Home from './Search/pages/Home/index'
import AddLists from "V2Rcode/AddLists";
import ViewProperty from './V2Rcode/ViewProperty'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route exact path='/' component={Landing} />
      <Route exact component={Login} path='/login'/>
      <Route exact component={Register} path='/register'/>
      <Route  exact component={PaymentForm} path='/pay'/>
      <Route exact component={Pricing} path='/pricing'/>
      <Route exact component={Home} path='/search_property'/>
      <Route exact component={Blog} path='/blog'/>
       <Route exact component={Contact} path='/contact'/>
       <Route exact component={Details} path='/search_property/:propertyId'/>
       <Route exact component={AddLists} path='/list_property'/>
       
       <Route exact component={ViewProperty} path='/view_property'/>


       





     

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
