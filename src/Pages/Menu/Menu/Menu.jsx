
import {Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import dessertImage from '../../../assets/home/chef-service.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../Hooks/useMenu';
const Menu = () => {
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup= menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
        <title>Food Hub | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImage} title={'Our Menu'}></Cover>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts items */}
      <MenuCategory items={desserts} title='desserts'></MenuCategory>
      
     
        </div>
    );
};

export default Menu;