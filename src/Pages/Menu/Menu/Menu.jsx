
import {Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import Offered from './Offered';
import Dessert from './Dessert';
import Salad from './Salad';
import Soup from './Soup';
import Pizza from './Pizza';

const Menu = () => {
    return (
        <div>
            <Helmet>
        <title>Food Hub | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImage} title={'Our Menu'} ></Cover>
      <Offered></Offered>
      <Dessert></Dessert>
      <Salad></Salad>
      <Soup></Soup>
      <Pizza></Pizza>
        </div>

    );
};

export default Menu;