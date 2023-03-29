import React from 'react'
import Layout from '../component/Layout/Layout'
const Menu = () => {
  return (
    <div className='Menu'>
      <Layout/>
      <h2 className='menusub'>Discover</h2>
      <h1 className='menulist'> Our Food Menu</h1>
      <div className='Menuitems'>
      <div className='item'>
        <h2 className='itemname'> Main Courses</h2>
        <p>Super Delicious Zuppa Toscana-------------$40</p>
        <p>Bacon Coli Baked Australian Beef----------$40</p>
      </div>
      <div className='item'>
        <h2 className='itemname'>Soups & Salads</h2>
        <p>Salat Banana Flower-----------------------$40</p>
        <p>Gourmet Mushroom Risotto------------------$40</p>
      </div>
      <div className='item'>
        <h2 className='itemname'>Desserts</h2>
        <p>Ice Cream Tarte Apple---------------------$40</p>
        <p>Fruit Mile Feuile-------------------------$40</p>
      </div>
      <div className='item'>
        <h2 className='itemname'>Drinks</h2>
        <p>Double Chocolate Mud Pie------------------$40</p>
        <p>Panmacotte Cream Cake---------------------$40</p>
      </div>
      </div>
      
    </div>
  )
}

export default Menu
