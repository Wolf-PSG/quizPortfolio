import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { CardList } from './components/card-list/card-list.component';
// import {setCurrentUser} from './redux/user/user.action'
// import {connect} from 'react-redux'
// import SignInAndUp from './pages/sign/sign.component';
import {
  Route, Switch, Redirect, BrowserRouter,
} from 'react-router-dom';
import Header from './components/header/header.component';
import CreateQuestion from './components/create-form/create-form.component';
// import Header from './components/header/header.component';

const App = () => {
  const users = [];
  // useEffect(async () => { // runs right after the first render
  //     const usersData = await axios('https://jsonplaceholder.typicode.com/users');
  //     // console.log(users.data);
  //     this.setState({ users: usersData.data });
  //     console.log(this.dogs)
  //   })
  // const changeDog = shuffle(dog);
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="/quizzes" />
          <Route path="/signin" />
        </Switch>
        <div>
          Hello
        </div>
        <CreateQuestion/>
      </BrowserRouter>

    </div>

  );
};

export default App;