import styled from 'styled-components';
import AnimeCard from './AnimeCard';

function AnimeList(props) {
  return (
    <ListContainer>
      {props.animeList.map(anime => (
        <AnimeCard
          anime={anime}
          key={anime.mal_id}
        />
      ))}
    </ListContainer>
  );
}

export default AnimeList;

const ListContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  margin-top: 60px;
`;