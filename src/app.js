import Header from './components/Header'
import Contact from './components/Contact'
import Project from './components/Project'
import Main from './components/Main';
import Footer from './components/Footer';
import './CSS/normalize.css';
import './CSS/bootstrap.min';
// import './CSS/materialdesignicons.min';
import './CSS/style.css';
import './JS/jquery.min.js';
// import './JS/script';
// import './JS/bootstrap';
// import './JS/typed';


const app = () => {
    document.getElementById('header').innerHTML = Header();
    document.getElementById('main').innerHTML = Main();
    document.getElementById('footer').innerHTML = Footer();
    document.getElementById('contact').innerHTML = Contact();
    // document.getElementById('project').innerHTML = Project();

    
}

// Initialize app
app();