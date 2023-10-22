import logo from '../../assets/logo.svg';
import './index.css';

function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <nav className='Header-nav'>
        <a href='/' className='Header-link'>
          Home
        </a>
        <a href='/projects' className='Header-link'>
          Projects
        </a>
        <a href='/contacts' className='Header-link'>
          Contacts
        </a>
      </nav>
    </header>
  );
}

export default Header;
