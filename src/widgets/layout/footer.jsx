import PropTypes from 'prop-types'
import { Typography, IconButton } from '@material-tailwind/react'

const year = new Date().getFullYear()

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    color="white"
                    className="rounded-full shadow-none bg-transparent"
                  >
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  title: 'System Shack',
  description: 'Your Startups Digital Accelerator',
  socials: [
    {
      color: 'gray',
      name: 'twitter',
      path: '',
    },
    {
      color: 'gray',
      name: 'youtube',
      path: '',
    },
    {
      color: 'gray',
      name: 'linkedin',
      path: '',
    },
    {
      color: 'black',
      name: 'github',
      path: '',
    },
  ],
  menus: [
    {
      name: 'useful links',
      items: [
        { name: 'About Us', path: 'https://www.systemshack.tech/aboutus' },
        { name: 'Blog', path: '' },
        {
          name: 'Careers',
          path: '',
        },
        {
          name: 'Portfolio',
          path: 'https://www.systemshack.tech/portfolio',
        },
      ],
    },
    {
      name: 'other resources',
      items: [
        {
          name: 'Terms of Service',
          path: 'https://www.systemshack.tech/tos',
        },
        {
          name: 'Privacy Policy',
          path: 'https://www.systemshack.tech/privacy',
        },
        {
          name: 'Support',
          path: 'https://www.systemshack.tech/support',
        },
        {
          name: 'Contact Us',
          path: 'https://www.systemshack.tech/contactus',
        },
      ],
    },
  ],
  copyright: <>Copyright © {year} System Shack. All rights reserved.</>,
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
}

Footer.displayName = '/src/widgets/layout/footer.jsx'

export default Footer
