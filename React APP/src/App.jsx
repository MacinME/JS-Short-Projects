import { useEffect, useRef, useState } from "react";
import { Articles } from "./components/Articles";
import { Banner } from "./components/Banner";
import { ItemsApp } from "./components/ItemsApp";
import { Navbar } from "./components/Navbar";
import { MainText } from "./components/MainText";
import { Footer } from "./components/Footer";

export const App = () => {


  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
      const onResize = () => {
          const widthElement = elementRef.current.offsetWidth;
          setWidth(widthElement);
      }

      // Initialize the onResize
      onResize();

      window.addEventListener('resize', onResize);

      return () => {
          window.removeEventListener('resize', onResize);
      }
      
  }, [])


  return (
    <div id="App">
      {/* Header */}
      <header className="relative z-20 w-full">
        {/* Navbar */}
        <Navbar width={ width } />
      </header>

      <section className={  `${ width >= 1400 && 'flex'  }` }>
        <div className="w-full order-last">
          {/* Banner */}
          <Banner width={ width } />
        </div>

        <div className="w-full">
          {/* Main Text */}
          <MainText width={ width } />
        </div>
      </section>

      <main ref={ elementRef }>
        <div>
          {/* Items */}
          <ItemsApp width={ width } />

          {/* Articles */}
          <Articles width={ width } />
        </div>

        {/* Footer Component */}
        <Footer width={ width } />
      </main>
    </div>
  )
}
