import {useEffect} from "react";

const NormalPage = ({id, status, TakeStatus}) => {

  useEffect(() => {
    TakeStatus()
  }, [])

  return (
    <textarea className='NormalPage' value={status} readonly disabled> </textarea>
  );
};

export default NormalPage;
