import logo from '../../assets/images/todogood_logo.png';
import './splash.css';

export const Splash = () => {
  return (
    <div className="col-center splash-container">
      <div className="col-center">
        <img className="logo" src={logo} alt="mylogo" />
        <div style={{ padding: '20px 0', fontSize: '.9rem' }}>VERSION 1.0</div>
      </div>

      <div className="row-center loader">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
};
