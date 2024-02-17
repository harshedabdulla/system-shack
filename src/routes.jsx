import { Home, Profile, Services, SignIn, SignUp } from '@/pages'

export const routes = [
  {
    name: 'home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'Services',
    path: '/services',
    element: <Services />,
  },
  {
    name: 'Portfolio',
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    name: 'Blog',
    target: '_blank',
    path: 'https://harshedabdulla.hashnode.dev',
  },
  {
    name: 'About Us',
    path: '/profile',
    element: <Profile />,
  },
]

export default routes
