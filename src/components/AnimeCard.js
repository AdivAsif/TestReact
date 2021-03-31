import styled from 'styled-components';

function AnimeCard({ anime }) {
  return (
    <AnimeImage>
      <a href={anime.url} target='_blank' rel='noreferrer'>
        <img src={anime.image_url}
          alt=''
        />
        <h3>{anime.title}</h3>
      </a>
    </AnimeImage>
  );
}

export default AnimeCard;

const AnimeImage = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 33%;

  > a {
    flex: 1;
    padding: 16px 8px;
    text-decoration: none;
    width: 257px;

    > h3 {
      font-weight: 500;
      color: black;
      align-items: center;
      justify-content: space-between;
    }

    > img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
      transition: 0.4s;

      &:hover {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
        transform: scale(1.02);
      }
    }
  }
`;
