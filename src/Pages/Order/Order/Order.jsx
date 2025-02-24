import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {
  const [menu] = useMenu()
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')
  const desserts = menu.filter(item => item.category === 'dessert')
   const Offered = menu.filter(item => item.category === 'offered')
    const [tabIndex,setTabIndex] = useState(0)
    return (
        <div>
          <Helmet>
                  <title>Food Hub | order</title>
                </Helmet>
            <Cover img={orderImg} title='Order Now'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>dessert</Tab>
    <Tab>pizza</Tab>
    <Tab>soup</Tab>
    <Tab>drinks</Tab>
    
  </TabList>
  <TabPanel> <OrderTab items={salad}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={desserts}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={Offered}></OrderTab></TabPanel>

</Tabs>
       
        </div>
    );
};

export default Order;