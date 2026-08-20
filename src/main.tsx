import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './appRoutes.tsx';
import './index.css';

export const createRoot = ViteReactSSG(
  {
    routes,
  },
  () => {
    // optional setup
  }
);
