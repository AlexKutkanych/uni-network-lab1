import { TypeAnimation } from 'react-type-animation';
import Header from './Header';
import MemeMain from '../assets/meme-main.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='App-main'>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            'My name is Oleksandr',
            1000,
            "My name is Oleksandr. I'm a FullStack developer 💻",
            1000,
            "My name is Oleksandr. I'm a 🏀 player",
            1000,
          ]}
          speed={50}
          style={{ height: 100, fontSize: 40, color: 'white' }}
          repeat={1}
        />
        <img src={MemeMain} className='App-meme' alt='meme' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
