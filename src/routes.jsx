import { Home, Profile, SignIn, SignUp } from '@/pages'

export const routes = [
  {
    name: 'home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'Services',
    path: '/profile',
    element: <Profile />,
  },
  {
    name: 'Portfolio',
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    name: 'About Us',
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    name: 'Blog',
    href: 'https://www.material-tailwind.com/docs/react/installation',
    target: '_blank',
    element: '',
  },
]

export default routes
