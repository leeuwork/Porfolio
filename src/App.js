import './App.css';
import Aslan from './assets/1.jpg'

function App() {
  return (
    <div className='main-container'>
      <div className='first-container'>
        <h1 className='name'>I AM ASLAN SHAKEN</h1>
        <h4>an engineer, a creative, an innovator, a leader</h4>
        <img className='scroll-down' src="https://img.icons8.com/office/30/000000/double-down.png" />
      </div>

      <div className='second-container'>
        <h1 className='about'>ABOUT</h1>
        <div className='ab-left-right'>
          <div className="ab-left"><img src={Aslan} /></div>
          <div className='ab-right'>
            <h1 className='ab-right-header'>Software Engineer \ Full Stack Developer</h1>
            <h3 className='ab-right-h3'>I believe in technological solutions and am eager
              to build products that can solve social issues to make a positive impact on the world.
            </h3>
            <div className='ab-ol-left-right'>
              <ol className='ab-ol-left'>
                <li>Email: <a>aslanshaken@gmail.com</a></li>
                <li>Location: <a>New York, USA</a></li>
              </ol>
              <ol className='ad-ol-right'>
                <li>Github:<a>aslanshaken</a></li>
                <li>Linkedin:<a>Aslan Shaken</a></li>
                <li>Facebook:<a>Aslan Shaken</a></li>
                <li>Twitter: <a>Aslan Shaken</a></li>
              </ol>
            </div>
            <p>
              
            </p>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
