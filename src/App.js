import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import ListUsers from './components/listUsers'
import ListPosts from './components/listPosts'
import Comment from './components/comments'

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Route exact path='/' component={ListUsers}/>
     <Switch>
      
     <Route   path='/posts/:id' component={ListPosts}/>
     <Route   path='/comment/:id' component={Comment}/>

     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
