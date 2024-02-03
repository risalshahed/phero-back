import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// images
import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTitle';

export default function Category() {
  return (
    <section>
      <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        heading={'order online'}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
          <h3 className='text-4xl font-semibold text-white uppercase pb-6 -mt-16 text-center'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <h3 className='text-4xl font-semibold text-white uppercase pb-6 -mt-16 text-center'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
          <h3 className='text-4xl font-semibold text-white uppercase pb-6 -mt-16 text-center'>soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
          <h3 className='text-4xl font-semibold text-white uppercase pb-6 -mt-16 text-center'>dessert</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h3 className='text-4xl font-semibold text-white uppercase pb-6 -mt-16 text-center'>salad</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}