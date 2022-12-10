import './login.css'

const Login = ({TakeOpenMargaret, TakeOpenDavid}) => {
  return (
    <div className='login'>
      <div className='scascsa'>
      <button className='david' onClick={() => TakeOpenMargaret()}>margaret_grey</button>
      <button className='margaret' onClick={() => TakeOpenDavid()}>davey_dmitriev</button>
      </div>
    </div>
  );
};

export default Login;