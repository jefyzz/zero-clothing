import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
      <h2>{title[0].toUpperCase() + title.slice(1)}</h2>
        <p>Comprar ahora</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
