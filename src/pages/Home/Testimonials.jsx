import SectionTitle from '../../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const res = await fetch('reviews.json');
    const data = await res.json();
    setReviews(data);
  }

  useEffect(() => {
    getReviews();
  }, []);

  const reviewItem = reviews?.map(eachReview =>
    <SwiperSlide key={eachReview._id}>
      <div className='mx-24 my-16 flex flex-col items-center'>
        <Rating
          style={{ maxWidth: 180 }}
          value={eachReview.rating}
          readOnly
        />
        <p className='py-4'>{eachReview.details}</p>
        <h3 className="text-2xl text-orange-400">{eachReview.name}</h3>
      </div>
    </SwiperSlide>
  )

  return (
    <section className='py-20'>
      <SectionTitle
        subHeading='What Our Clients Say'
        heading='testimonials'
      />

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviewItem}
      </Swiper>
    </section>
  )
}