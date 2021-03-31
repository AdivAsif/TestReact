import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

function Header(props) {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <form
          className='search-box'
          onSubmit={props.HandleSearch}
        >
          <input
            placeholder='Search...'
            type="search"
            required
            value={props.search}
            onChange={e => props.SetSearch(e.target.value)}
          />
        </form>
      </HeaderSearch>

      <HeaderRight>
        <Link to='/about'>
          <HelpOutlineIcon />
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--test-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.3;
  display: flex;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > form > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > a {
    margin-left: auto;
    margin-right: 20px;
    color: white;
  }
`;