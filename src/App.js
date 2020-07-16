import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './layout/HomePage';
import MovieContextProvider from './context/MovieContext';
import SearchPage from './layout/SearchPage';
import DetailPage from './layout/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Route path='/' exact component={HomePage} />
        <Route path='/movie/:id' exact render={(props) => (<DetailPage {...props} type='movie' />)} />
        <Route path='/tv/:id' exact render={(props) => (<DetailPage {...props} type='tv' />)} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/search/query/:query" component={SearchPage} />
      </MovieContextProvider>
    </BrowserRouter>    
  );
}

export default App;
