import logo from '../../assets/logo-white.svg';

// Social Network Icons
import facebookIcon from '../../assets/icon-facebook.svg';
import youtubeIcon from '../../assets/icon-youtube.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import pinterestIcon from '../../assets/icon-pinterest.svg';
import instagramIcon from '../../assets/icon-instagram.svg';

const links = ['About US', 'Contact', 'Blog', 'Support', 'Privacy Policy'];

export const Footer = ({ width }) => {
  return (
    <footer className="footer-color w-full">
            <div className={ `${ width < 1400 ? null : 'flex justify-between main-container items-center' }` }>
                <div className={ ` ${ width < 1400 ? 'w-full py-10' : 'flex justify-start w-full gap-44 items-center'}` }>
                    <div className={ `${ width < 1400 ? '' : 'flex flex-col gap-10' }` }>
                        <div className='w-full flex justify-center mb-10'>
                            <img 
                                src={ logo } 
                                alt="Logo Image" 
                                className=''
                            />
                        </div>
                        <div className='flex gap-4 justify-center'>
                            <div>
                                <img src={ facebookIcon } alt="Facebook Icon" className='w-6' />
                            </div>
                            <div>
                                <img src={ youtubeIcon } alt="Youtube Icon" className='w-6' />
                            </div>
                            <div>
                                <img src={ twitterIcon } alt="Twitter Icon" className='w-6' />
                            </div>
                            <div>
                                <img src={ pinterestIcon } alt="Pinterest Icon" className='w-6' />
                            </div>
                            <div>
                                <img src={ instagramIcon } alt="Instagram Icon" className='w-6' />
                            </div>
                        </div>
                    </div>

                {/* Links */}
                <div>
                    <ul className='flex flex-col gap-4 items-center py-10'>
                        {
                            links.map( ( link ) => (
                                <li 
                                    key={link}
                                    className='text-gray-300'
                                > { link } </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Button */}
            <div className={ `${ width >= 1400 && 'flex flex-col items-center h-full' }` }>
                <div className='flex justify-center'>
                    <button className='butttonStyle w-auto py-3 px-8 text-white font-semibold rounded-full'>
                        Request Invite
                    </button>
                </div>

                {/* Copyright text */}
                <p className="w-full text-center mt-8 text-gray-400"> &copy; Easybank All Rights Reserved </p>
                </div>
            </div>
    </footer>
  )
}
