import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import PageWrapper from "./components/PageWrapper.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  const location = useLocation();

  return (
    <main className="flex-1 flex flex-col px-2 md:px-0 py-6 min-h-screen">
      <Nav />
      <section className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, element }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={<PageWrapper>{element}</PageWrapper>}
                />
              );
            })}
          </Routes>
        </AnimatePresence>
      </section>
      <Footer />
    </main>
  );
}

export default App;
