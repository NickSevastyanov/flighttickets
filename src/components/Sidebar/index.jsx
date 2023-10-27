import Categories from './Categories';
import Sort from './Sort';
import Price from './Price';
import Airlines from './Airlines';

const Sidebar = () => {
  return (
    <div>
      <Categories />
      <Sort />
      <Price />
      <Airlines />
    </div>
  );
};

export default Sidebar;
