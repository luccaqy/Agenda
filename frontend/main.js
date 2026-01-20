import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login'; 
import CadastraContato from './modules/CadastraContato';
// import './assets/css/style.css';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const cadastraContato = new CadastraContato('.form-cadastro-contato');
login.init();
cadastro.init();
cadastraContato.init();