import {useEffect} from "react";
import React from "react";

const EditPage = ({id, status, TakeStatus, updateStatus}) => {
  const TExtarea = React.createRef()
  useEffect(() => {
    TakeStatus()
  }, [])

  return (
    <>
      <button className='douidv csudcs' onClick={() => updateStatus(TExtarea.current.value)}>сохранить</button>
      <textarea ref={TExtarea} className='textarea'>{status}</textarea>
    </>

  )
}

export default EditPage;