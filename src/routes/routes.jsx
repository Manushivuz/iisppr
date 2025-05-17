import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// Lazy load pages
const Layout = lazy(() => import('../components/layout/Layout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Gallery = lazy(() => import('../components/home/Gallery'));
const StatsSection = lazy(() => import('../components/home/StatsSection'));
const ProjectsHighlight = lazy(() => import('../components/home/ProjectsHighlight'));
const Projects = lazy(() => import('../pages/Projects'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const CustomSvgCard = lazy(() => import('../components/home/CustomSvgCard'));
const CardGridLayout = lazy(() => import('../components/home/CardGridLayout'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const Hero = lazy(() => import('../components/home/Hero'));



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Consider wrapping Gallery too
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'projects', element: <Projects /> },
      { path: 'testimonials', element: <Testimonials /> }
    ]
  }
]);

export default router;
