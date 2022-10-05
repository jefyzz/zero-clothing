import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Gorras',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/gorras',
  },
  {
    id: 2,
    title: 'Camperas',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/camperas',
  },
  {
    id: 3,
    title: 'Zapatillas',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/zapatillas',
  },
  {
    id: 4,
    title: 'For Women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/for Women',
  },
  {
    id: 5,
    title: 'For Men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/for Men',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
