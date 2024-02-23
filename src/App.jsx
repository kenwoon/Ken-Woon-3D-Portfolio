import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {

  // useEffect(() => {
  //   metaTag.current = document.querySelector('meta[name="theme-color"]');
  //   currThemeColor.current = metaTag.current?.getAttribute('content') ?? null;

  //   // The top-of-screen intersection observer only sets the theme-color
  //   const observerTop = new IntersectionObserver(
  //     (es) => {
  //       if (!metaTag.current) return;
  //       const selectedEntry = es.filter((e) => e.isIntersecting);
  //       const target = selectedEntry[0]?.target;
  //       if (!target) return;
  //       const color = target.getAttribute('data-metathemeswap-color');
  //       if (!color) return;
  //       currThemeColor.current = color;
  //       metaTag.current.setAttribute('content', currThemeColor.current);
  //     },
  //     {
  //       // Detect intersections at the very top of the screen
  //       rootMargin: '-0.05% 0px -99.9% 0px',
  //     },
  //   );

  //   // The bottom-of-screen intersection observer sets the background color
  //   // and also updates the meta theme-color for one animation frame.
  //   const observerBottom = new IntersectionObserver(
  //     (es) => {
  //       if (!metaTag.current) return;
  //       const selectedEntry = es.filter((e) => e.isIntersecting);
  //       const target = selectedEntry[0]?.target;
  //       if (!target) return;
  //       const color = target.getAttribute('data-metathemeswap-color');
  //       if (!color) return;
  //       document.body.style.backgroundColor = color;
  //       metaTag.current.setAttribute('content', currThemeColor.current + 'fe');
  //       const meta = metaTag.current;
  //       requestAnimationFrame(() => {
  //         meta.setAttribute('content', currThemeColor.current || '');
  //       });
  //     },
  //     {
  //       // Detect intersections at the very bottom of the screen
  //       rootMargin: '-99.9% 0px -0.05% 0px',
  //     },
  //   );
  // })

  return (
    <BrowserRouter>
    <meta name="theme-color" content="{{#FAF1E4}}" />
      <div className="relative z-0 bg-primary">
        <div className="bg-[#FAF1E4]">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        <div className="bg-[#435334] relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
