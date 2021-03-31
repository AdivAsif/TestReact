import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

function Sidebar({ topAnime }) {
  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user.displayName}</h2>
          <h3>
            {user.email}
          </h3>
        </SidebarInfo>
      </SidebarHeader>
      <Link to='/'>
        <SidebarOption Icon={MovieFilterIcon} title='Anime List' />
      </Link>
      <hr />
      {topAnime.map(anime => (
        <a
          href={anime.url}
          target='#_blank'
          key={anime.mal_id}
          rel='noreferrer'
        >
          <SidebarOption Icon={StarIcon} title={anime.title} />
        </a>
      ))}
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title='Add Room' />
      <Link to='/chat'>
        {channels?.docs.map(doc => (
          <SidebarOption
            key={doc.id}
            id={doc.id}
            title={doc.data().name}
          />
        ))}
      </Link>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--test-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }

  > a {
    color: white;
    text-decoration: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
`;