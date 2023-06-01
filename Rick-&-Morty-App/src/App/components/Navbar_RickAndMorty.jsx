// Import assets
import RickAndMorty_Logo from '../../../assets/Rick-And-Morty-Logo.png';
import { Button_RickAndMorty } from './Button_RickAndMorty';

export const Navbar_RickAndMorty = () => {
  return (
    <nav>
      {/* Container */}
      <div className='container'>
        <div className="navbar-logo">
          <img src={ RickAndMorty_Logo } alt="Rick And Morty Logo" />
          <div>
            {/* Button Component */}
            <Button_RickAndMorty buttonText='Log in' />
          </div>
        </div>
      </div>
    </nav>
  )
}
