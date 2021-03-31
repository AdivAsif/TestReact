import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import styled from 'styled-components';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import AnimeList from './components/AnimeList';
import Spinner from 'react-spinkit';
import About from './components/About.js';

function App() {
  const [user, loading] = useAuthState(auth);
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState('');

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());

    SetTopAnime(temp.top.slice(0, 5));
  };

  const GetHomeAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
      .then(res => res.json());

    SetAnimeList(temp.top.slice(0, 12));
  };


  const HandleSearch = e => {
    e.preventDefault();

    console.log(search);
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
      .then(res => res.json());

    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
    GetHomeAnime();
  }, []);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1cec3ab-18e2-4db8-a5b6-0e2723694736/d41p056-e91724bb-2ca7-4929-ac60-b1d6919278ed.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDFjZWMzYWItMThlMi00ZGI4LWE1YjYtMGUyNzIzNjk0NzM2XC9kNDFwMDU2LWU5MTcyNGJiLTJjYTctNDkyOS1hYzYwLWIxZDY5MTkyNzhlZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Io5Y3C0ybFiHhYf5kkgGRH1jR3HMB0ixX1NXjJyLkGI'
            alt=''
          />

          <Spinner
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header
              HandleSearch={HandleSearch}
              search={search}
              SetSearch={SetSearch}
            />
            <AppBody>
              <Sidebar topAnime={topAnime} />
              <Switch>
                <Route exact path='/'>
                  <AnimeList animeList={animeList} />
                </Route>
                <Route path='/chat' component={Chat} />
                <Route path='/about' component={About} />
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div >
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;