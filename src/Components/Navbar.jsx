import React from 'react';
import Logo from '../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <img src={Logo} alt="coffee" className='w-20 h-20 ml-20 pt-5' />
            <div className='flex justify-around '>
                <div className=' mr-20' style={{color: '#F8E4BE'}}>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-xl mr-6 '/>
                    <FontAwesomeIcon icon={faUser} className='text-xl' />
                </div>
                <ul className='flex mr-20'>
                    <li className='mr-6'>Home</li>
                    <li className='mr-6'>Menu</li>
                    <li className='mr-6'>Services</li>
                    <li className='mr-6'>Products</li>
                    <li className='mr-6'>Blogs</li>
                    <li className='mr-6'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

