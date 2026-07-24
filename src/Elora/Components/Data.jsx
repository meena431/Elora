import React from 'react'
import product1 from '../img/shop-page/product-01.jpg';
import product2 from '../img/shop-page/product-02.jpg';
import product3 from '../img/shop-page/product-03.jpg';
import product4 from '../img/shop-page/product-04.jpg';
import product5 from '../img/shop-page/product-05.jpg';
import product6 from '../img/shop-page/product-06.jpg';
import product7 from '../img/shop-page/product-07.jpg';
import product8 from '../img/shop-page/product-08.jpg';
import product9 from '../img/shop-page/product-09.jpg';
import product10 from '../img/shop-page/product-10.jpg';
import product11 from '../img/shop-page/product-11.jpg';
import product12 from '../img/shop-page/product-12.jpg';
import product13 from '../img/shop-page/product-13.jpg';
import product14 from '../img/shop-page/product-14.jpg';
import product15 from '../img/shop-page/product-15.jpg';
import product16 from '../img/shop-page/product-16.jpg';
import product17 from '../img/shop-page/product-17.jpg';
import product18 from '../img/shop-page/product-18.jpg';
import product19 from '../img/shop-page/product-19.jpg';

import insta1 from '../img/insta-5.jpg';
import insta2 from '../img/insta-3.jpg';
import insta3 from '../img/insta-1.jpg';
import insta4 from '../img/insta-6.jpg';
import insta5 from '../img/insta-4.jpg';
import insta6 from '../img/insta-2.jpg';

import blog1 from '../img/blog/blog-2.jpg';
import blog2 from '../img/blog/blog-4.jpg';
import blog3 from '../img/blog/blog-6.jpg';

export const products = [
    { id: 1, category: 'kids', img: product1, name: 'Cozy Chocolate OverCoat', price: '1500', arrival: 'hot' },
    { id: 2, category: 'women', img: product2, name: 'Classic White Shirt', price: '950', arrival: 'hot' },
    { id: 3, category: 'men', img: product3, name: 'Casual Blue Checks', price: '750', arrival: 'old' },
    { id: 4, category: 'women', img: product4, name: 'Warm Brown OverCoat', price: '2500', arrival: 'hot' },
    { id: 5, category: 'kids', img: product5, name: 'Cool Breeze T-Shirt', price: '1300', arrival: 'old' },
    { id: 6, category: 'accessories', img: product6, name: 'Midnight Watch', price: '510', arrival: 'old' },
    { id: 7, category: 'kids', img: product7, name: 'Crimson Hooded Coat', price: '2400', arrival: 'hot' },
    { id: 8, category: 'women', img: product8, name: 'Clean Cut T-Shirt', price: '1700', arrival: 'old' },
    { id: 9, category: 'men', img: product16, name: 'Urban Orange Tee', price: '575', arrival: 'hot' },
    { id: 10, category: 'women', img: product10, name: 'Blackout T-Shirt', price: '480', arrival: 'old' },
    { id: 11, category: 'men', img: product11, name: 'Blue Boxed Classic', price: '2100', arrival: 'old' },
    { id: 12, category: 'accessories', img: product12, name: 'Classic Brown Belt', price: '350', arrival: 'hot' },
    { id: 13, category: 'kids', img: product13, name: 'Blue Core T-Shirt', price: '1240', arrival: 'hot' },
    { id: 14, category: 'men', img: product18, name: 'Black Hoodie', price: '840', arrival: 'hot' },
    { id: 15, category: 'accessories', img: product15, name: 'Black Classic', price: '670', arrival: 'hot' },
    { id: 16, category: 'accessories', img: product9, name: 'DualTone Classic', price: '700', arrival: 'hot' },
    { id: 17, category: 'men', img: product17, name: 'Purple Coat', price: '840', arrival: 'hot' },
    { id: 18, category: 'women', img: product14, name: 'Black Rose Tee', price: '400', arrival: 'old' },
    { id: 19, category: 'women', img: product19, name: 'White T-Shirt', price: '430', arrival: 'old' },
];

export const insta = [
  { id: 1, img: insta1 },
  { id: 2, img: insta2 },
  { id: 3, img: insta3 },
  { id: 4, img: insta4 },
  { id: 5, img: insta5 },
  { id: 6, img: insta6 },
];

export const blogs = [
  { id: 1, img: blog1, desc: 'Start Your Day with Style, Flowers, and Self-Love', type: 'TRAVEL', date: 'July 5,2025' },
  { id: 2, img: blog2, desc: 'Enjoying Coffee, Crunchy Macarons, and Life’s Gentle Moments', type: 'FASHION', date: 'July 5,2025' },
  { id: 3, img: blog3, desc: 'Last week I had my work trip of the year to Berlin', type: 'TRAVEL', date: 'November 28,2024' },
];

export const perks = [
  { id: 1, icon: <i className="bi bi-truck"></i>, perk: 'FREE SHIPPING', perk_cont: 'For all order over ₹250' },
  { id: 2, icon: <i className="bi bi-clock"></i>, perk: 'DELIVERY TIME', perk_cont: 'If Good have Problems' },
  { id: 3, icon: <i className="bi bi-shield-lock"></i>, perk: 'SECURE PAYMENT', perk_cont: '100% Secure Payment' },
];