import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay} from 'swiper/modules';
import Item from './Item'

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([])
  const {books} = useContext(ShopContext)
    useEffect(() => {
        if (books && books.length > 0) {
        const data = books.filter((item) => item.popular)
        setPopularBooks(data.slice(0,6))
    }
    }, [books])
  return (
    <section className='max-padd-container py-16'>
      <Title title1={"Popular"} title2={"Products"} titleStyles={"pb-10"}
       para={"Check out our newest books arriving weekly with fresh ideals, exciting plots, and vibrant voices"}/>
       {/* CONTAINER */}
       {<Swiper 
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                355: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay]}
              className='min-h-[333px]'
            >
                {
                popularBooks.map((book) => (
                  <SwiperSlide key={book._id}>
                    <Item book={book} />
                  </SwiperSlide>
                ))
              }
              </Swiper>}
    </section>
  )
}

export default PopularBooks
