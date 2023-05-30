import backgroundMobile from '../../assets/bg-intro-mobile.svg';
import backgroundDesktop from '../../assets/bg-intro-desktop.svg';
import mockups from '../../assets/image-mockups.png';

export const Banner = ({ width }) => {

  return (
    <div className={`${ width < 1400 ? '' : 'w-full h-default relative'}`}>
        <div className={ `${ width >= 1400 && 'intro-desktop' }` }>
            <img 
                src={ width <= 1400 ? backgroundMobile : backgroundDesktop } 
                alt="Background" 
                className={`${ width < 1400 ? 'w-full h-30rem' : 'w-full h-30rem' }`}
            />
        </div>

        <div className={`${ width < 1400 ? 'w-full flex justify-center absolute left-0 -top-20 h-96 px-5': 'absolute -top-32 -right-32'}`}>
            <img 
                src={ mockups } 
                alt="Image of CellPhones" 
                className={ `${ width < 1400 ? 'w-80 h-96 mockupsMobile' : 'mockusDesktop'}` }
            />
        </div>
    </div>
  )
}
