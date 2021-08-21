import logo from './logo.svg';
import './App.css';
import As from './assets/1.jpg'
import HtmlCss from './assets/html_css.png'
import Js from './assets/js.png'
import ReactImg from './assets/react.png'
import Node from './assets/node_js.png'
import Ruby from './assets/ruby.png'
import MondoDB from './assets/mangodb.png'
import Express from './assets/express.png'
import Sql from './assets/sql.png'
import AWS from './assets/AWS.png'
import Google from './assets/Google_Certs_IT.png'
import Linux from './assets/linux.png'
import Docker from './assets/docker.png'
import Kubernetes from './assets/kubernetes.png'
import Github from './assets/github.png'
import Raspberry from './assets/raspberry.png'
import Tailwind from './assets/tailwind.png'
import Repair from './assets/repair.jpg'
import TCP from './assets/tcp.png'
import Info from './assets/info-box.png'
import Covid from './assets/covid-19.png'
import Go4profit from './assets/go4profit.png'
import QLine from './assets/q-line.png'
import Cycle from './assets/cycle.png'
import Go4Pets from './assets/go4pets.png'

function App() {
  return (
    <div className='main-container'>
      {/* FIRST */}
      <div className='first-box'>
        <h1>I AM ASLAN SHAKEN</h1>
        <p>an engineer, a creative, an innovator, a leader</p>
        <img className='scroll-down' src="https://static.thenounproject.com/png/54414-200.png" />
      </div>

      {/* SECOND */}
      <h1 className='center'>ABOUT</h1>
      <div className='second-box'>
        <div className='second-left'><img src={As} /></div>
        <div className='second-right'>
          <h2 className='title'>Software Engineer \ Full Stack Developer</h2>
          <h4>Based in NYC<img src="https://img.icons8.com/emoji/48/000000/statue-of-liberty-emoji.png" />but
            open to relocate.
          </h4>
          <p>I believe in technological solutions and am eager to
            build products that can solve social issues to make a positive impact on the world.
          </p>
          <hr></hr>
          <p>Working for different projects, it helped me to adapt to
            the changes quickly and made me a mature team worker. A fast
            learner with strong time management and multi-tasking skills.
            I specialize in front and back ends. I deeply care about the product
            I build and make sure it’s usable and pleasant for the most number of people.
            I practice to write well-tested and high-quality code.
          </p>
          <div className='second-footer'>
            <p><a target="_blank" href='https://www.bmcc.cuny.edu/'><h4>BMCC - Associate</h4></a>
              <img src="https://img.icons8.com/small/16/000000/long-arrow-down.png" />
              <p> "Comp. Network Tech"</p>
            </p>
            <p><a target="_blank" href='https://www.baruch.cuny.edu/'><h4>Baruch College - Bachelor</h4></a>
              <img src="https://img.icons8.com/small/16/000000/long-arrow-down.png" />
              <p>"Info Risk Mngt\CyberSecurity"</p>
            </p>
            <p><a target="_blank" href='https://generalassemb.ly/'><h4>GA - Coding Bootcamp Grad</h4></a>
              <img src="https://img.icons8.com/small/16/000000/long-arrow-down.png" />
              <p> "Full-Stack Developer"</p>
            </p>
            <p><a target="_blank" href='https://www.udemy.com/course/aws-certified-cloud-practitioner-training-course/'><h4>AWS</h4></a>
              <img src="https://img.icons8.com/small/16/000000/long-arrow-down.png" />
              <p> "Certified Cloud Practitioner"</p>
            </p>
            <p><a target="_blank" href='https://www.coursera.org/professional-certificates/google-it-support'><h4>Google</h4></a>
              <img src="https://img.icons8.com/small/16/000000/long-arrow-down.png" />
              <p> "Certified IT Support"</p>
            </p>
          </div>
          <a target="_blank" href='https://docs.google.com/document/d/1xl8xoX3eQQnjhFzHYwwvlSzf9sBXp4jKuofjK4veZTc/edit?usp=sharing'><button className='resume'>Full Resume</button></a>
        </div>
        <div className='second-sidebar'>
          <a target="_blank" href='mailto:aslanshaken@gmail.com'><img src="https://img.icons8.com/ios/50/000000/new-post.png" /> </a>
          <a target="_blank" href='https://www.linkedin.com/in/aslanshaken/'> <img src="https://img.icons8.com/ios/50/000000/linkedin.png" /></a>
          <a target="_blank" href='https://github.com/aslanshaken'> <img src="https://img.icons8.com/ios/50/000000/github--v1.png" /></a>
          <a target="_blank" href='https://www.facebook.com/aslanshaken/'><img src="https://img.icons8.com/ios/50/000000/facebook--v1.png" /></a>
          <a target="_blank" href='https://twitter.com/AslanShaken'><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" /></a>
          <a target="_blank" href='https://www.instagram.com/a.shaken33/'><img src="https://img.icons8.com/ios/50/000000/instagram.png" /></a>
        </div>
      </div>

      {/* THIRD */}
      <h1 className='center'>SKILLS</h1>
      <div className='third-box'>
        <div className='third-small-boxes'><h4>HTML & (S) CSS</h4><img src={HtmlCss} alt="html/css" /></div>
        <div className='third-small-boxes'><h4>JavaScript (ES6+)</h4><img src={Js} alt="JS" /></div>
        <div className='third-small-boxes'><h4>React</h4><img src={ReactImg} alt="react" /></div>
        <div className='third-small-boxes'><h4>Node.js</h4><img src={Node} alt="node.js" /></div>
        <div className='third-small-boxes'><h4>Ruby on Rails</h4><img src={Ruby} alt="ruby" /></div>
        <div className='third-small-boxes'><h4>MangoDB </h4><img src={MondoDB} alt="MangoDB" /></div>
        <div className='third-small-boxes'><h4>Express</h4><img src={Express} alt="Express" /></div>
        <div className='third-small-boxes'><h4>SQL</h4><img src={Sql} alt="sql" /></div>
        <div className='third-small-boxes'><h4>AWS</h4><img src={AWS} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Google IT Support</h4><img src={Google} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Linux</h4><img src={Linux} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Docker</h4><img src={Docker} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Kubernetes</h4><img src={Kubernetes} alt="sql" /></div>
        <div className='third-small-boxes'><h4>GitHub</h4><img src={Github} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Raspberry Pi</h4><img src={Raspberry} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Tailwind CSS</h4><img src={Tailwind} alt="sql" /></div>
        <div className='third-small-boxes'><h4>Hardware Repair</h4><img src={Repair} alt="sql" /></div>
        <div className='third-small-boxes'><h4>TCP/IP</h4><img src={TCP} alt="sql" /></div>
      </div>

      {/* FORTH */}
      <h1 className='center'>PROJECTS</h1>

      <div className='forth-box'>
        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/KZImmigrantGuide' target="_blank">
            <img src={Info} />
            <div className='forth-project-text'>
              <h2>Info-Box</h2>
              <p className='forth-middle'>
                The web source aims to integrate all people in the US.
                It’s planned to be a digital toolbox and a source facilitator,
                where people will get veracious up-to-date information on various
                topics, including immigration, legalization, housing and lease/rent,
                job-hunting and offering etc.
              </p>
              <p>React | JavaScript | PostgreSQL | Ruby on Rails | AWS</p>
            </div>
          </a>
        </div>

        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/covid-19' target="_blank">
            <img src={Covid} />
            <div className='forth-project-text'>
              <h2>Covid-19 Tracker</h2>
              <p className='forth-middle'>
                A User can get the latest information about Covid-19 confirmed cases, deaths and recovery in the US by States and worldwide.
                John Hopkins University API provides up to date information.
              </p>
              <p>HTML | CSS | JavaScript | API (John Hopkins University)</p>
            </div>
          </a>
        </div>

        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/go4profit-v2' target="_blank">
            <img src={Go4profit} />
            <div className='forth-project-text'>
              <h2>Go4Profit</h2>
              <p className='forth-middle'>
                Bookkeeping portfolio for all type of business
              </p>
              <p>HTML | CSS | JavaScript | React</p>
            </div>
          </a>
        </div>

        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/q-line' target="_blank">
            <img src={QLine} />
            <div className='forth-project-text'>
              <h2>Q-Line</h2>
              <p className='forth-middle'>
                Q Line Logistics provides best services throughout the entire shipping from beginning for Reefer and DryVan.
              </p>
              <p>HTML | CSS | PHP</p>
            </div>
          </a>
        </div>

        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/cycleshop' target="_blank">
            <img src={Cycle} />
            <div className='forth-project-text'>
              <h2>Cycle-Shop</h2>
              <p className='forth-middle'>
                CycleShop facilitates consumer-to-consumer sales of motorcycles through the website.
                This app will demonstrate the CRUD framework utilizing Mongo, Express, React and Node.
                We setup the frontend as motorcycle e-commerce site with JWT authentication.
              </p>
              <p>React | JavaScript | Node.js | Express | MangoDB </p>
            </div>
          </a>
        </div>

        <div className='forth-project-box'>
          <a href='https://github.com/aslanshaken/go4pets' target="_blank">
            <img src={Go4Pets} />
            <div className='forth-project-text'>
              <h2>Go4Pets</h2>
              <p className='forth-middle'>
                It provides a service to customers who have pets. A user is able to see all available products, rating and their
                descriptions. Each item on home page leads to corresponding page that shows additional information.
                Additionally, a user is able to add their own item for sale.
              </p>
              <p>React | JavaScript | Node.js | AirTable </p>
            </div>
          </a>
        </div>

      </div>

      {/* FIFTH */}
      <div className='fifth-box'>
        <h4>© Copyright 2021 | All Rights Reserved | Made with <img src="https://img.icons8.com/office/16/000000/filled-like--v1.png" /> from NYC</h4>
      </div>

    </div>
  );
}

export default App;
