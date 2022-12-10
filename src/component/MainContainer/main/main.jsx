import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import '../../../App.css';
import EditPage from "../../main-page/editPage";
import NormalPage from "../../main-page/normalPage";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";


const Main = ({id,isEdit, ThunkMe, status, TakeStatusDavid, TakeStatusMargaret, changeIsEdit, ThunkUpdateStatus}) => {

  useEffect(() => {
    ThunkMe()
  }, [])


  const updateStatus = (text) => {
    ThunkUpdateStatus(text)
    changeIsEdit()
  }

  return (
    <>
      <Swiper className="main-wrapper"
              resistanceRatio={0}
              initialSlide={1}
      >
        <SwiperSlide>
          <div className='block-setting'>
            <div className='header'>
              <div className='name'>Давид</div>
              {id === 26969 ? isEdit ? null
                                      : <button onClick={() => changeIsEdit()} className='csudcs'>изменить</button> : null
              }
            </div>
            {id === 26969 ? isEdit ? <EditPage id={26969}
                                               TakeStatus={TakeStatusDavid}
                                               status={status.davidStatus}
                                               updateStatus={updateStatus}/>
                                   : <NormalPage id={26969}
                                                 TakeStatus={TakeStatusDavid}
                                                 status={status.davidStatus}/>
                          : <NormalPage id={26969}
                                        TakeStatus={TakeStatusDavid}
                                        status={status.davidStatus}/>}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='block-page'>
            <div className='header'>
              <div className='name'>Маргарита</div>
              {id === 26604 ? isEdit ? null
                                      : <button onClick={() => changeIsEdit()} className='csudcs'>изменить</button> : null
              }
            </div>
            {id === 26604 ? isEdit ? <EditPage id={26604}
                                               TakeStatus={TakeStatusMargaret}
                                               status={status.MargaretStatus}
                                               updateStatus={updateStatus}/>
                                   : <NormalPage id={26604}
                                                 TakeStatus={TakeStatusMargaret}
                                                 status={status.MargaretStatus}/>
                           : <NormalPage id={26604}
                                         TakeStatus={TakeStatusMargaret}
                                         status={status.MargaretStatus}/>}
          </div>
        </SwiperSlide>
      </Swiper>
      <NavLink to='/login'><button className='profile csudcs' >profile</button></NavLink>
    </>
  );
};

export default Main;