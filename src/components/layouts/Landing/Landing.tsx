import React from 'react'
import Container from '../../ui/container'
import ItemListing from '../../Item-listing/ItemListing'
import CategoriesBarSlider from '@/components/CategoriesBarSlider'

const Landing = () => {
  return (
    <>
        <CategoriesBarSlider/>
        <Container>
            <ItemListing data={items}/>
        </Container>
    </>
  )
}

export default Landing




const items = [
    {
      title: "Train at the X-Mansion",
      storeName: "Tech Store",
      price: 29.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Open the Olympic Games at Musée d'Orsay",
      storeName: "Gadget Shop",
      price: 59.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Gaming Keyboard",
      storeName: "Gaming Gear",
      price: 89.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Train at the X-Mansion",
      storeName: "Tech Store",
      price: 29.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Open the Olympic Games at Musée d'Orsay",
      storeName: "Gadget Shop",
      price: 59.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Gaming Keyboard",
      storeName: "Gaming Gear",
      price: 89.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Train at the X-Mansion",
      storeName: "Tech Store",
      price: 29.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Open the Olympic Games at Musée d'Orsay",
      storeName: "Gadget Shop",
      price: 59.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Gaming Keyboard",
      storeName: "Gaming Gear",
      price: 89.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Train at the X-Mansion",
      storeName: "Tech Store",
      price: 29.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Open the Olympic Games at Musée d'Orsay",
      storeName: "Gadget Shop",
      price: 59.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    },
    {
      title: "Gaming Keyboard",
      storeName: "Gaming Gear",
      price: 89.99,
      images: [
        "/images/i1.webp",
        "/images/i2.webp",
        "/images/i3.webp",
        "/images/i4.jpeg",
      ]
    }
  ];
  
  console.log(items);
  