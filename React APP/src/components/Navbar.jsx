import { useState } from 'react';

// Logo App
import logo from '../../assets/logo.svg';

// Icon Menu
import iconMenu from '../../assets/icon-hamburger.svg';
import { MenuMobile } from './MenuMobile';
import iconClose from '../../assets/icon-close.svg';

export const Navbar = ({ width }) => {

    const [toggle, setToggle] = useState(false);

    const onTogleMenu = () => {
        toggle ? setToggle(false) : setToggle(true);
    }


  return (
    <>
        <nav className={ `${ width < 1400 ? 'bg-gray-100 h-20 w-full flex items-center justify-around px-5' : 'w-full h-20 bg-gray-100 flex justify-center items-center z-10' }` }>
            <div className={ `${ width > 1400 && 'flex justify-center w-full cursor-pointer' }`}>
                <img 
                    src={ logo } 
                    alt="easybank" 
                    className='w-40'
                />
            </div>

            {/* Desktop Menu */}
            {
                width > 1400 && (
                    <div className='w-full'>
                        <ul className='flex gap-8 justify-center text-gray-500 '>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Contact</li>
                            <li className='cursor-pointer'>Blog</li>
                            <li className='cursor-pointer'>Careers</li>
                        </ul>
                    </div>
                )
            }

            {/* Button */}
            {
                width > 1400 && (
                    <div className='w-full flex justify-center'>
                        <button className='butttonStyle w-auto py-2 px-8 text-white font-semibold rounded-full'>
                            Request Invite
                        </button>
                    </div>
                )
            }

            {/* Mobile Menu */}
            {
                width < 1400 
                    ?
                    <button 
                        className='w-full flex justify-end w-auto h-6'
                        onClick={ onTogleMenu }
                    >
                        <img 
                            src={ !toggle ? iconMenu : iconClose } 
                            alt="Menu Icon" 
                            className='w-6 cursor-pointer'    
                        />
                    </button>
                    : null 
            }   
        </nav>

        {
            toggle && (
                <MenuMobile />
            )
        }
    </>
  )
}
