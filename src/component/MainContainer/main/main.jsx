import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import './../../App.css';


const Main = () => {
  return (
    <Swiper className="main-wrapper"
            resistanceRatio={0}
            initialSlide={1}
    >
      <SwiperSlide>
        <div className='block-setting'>
          <div className='name'>Давид</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='block-page'>
          <div className='name'>Маргарита</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Main;