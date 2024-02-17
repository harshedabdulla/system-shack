import { Card, Typography, Button } from '@material-tailwind/react'
import { Footer } from '@/widgets/layout'

export function Services() {
  return (
    <>
      <section className="bg-services-background relative block h-[30vh] bg-cover bg-center">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        <div className="container mx-auto px-4 flex items-center h-full">
          <Typography variant="h3" color="white" className="font-bold">
            Our Services
          </Typography>
        </div>
      </section>
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mb-6">
              <Card className="px-4 py-4">
                <Typography variant="h5" className="font-bold">
                  Web Development
                </Typography>
                <Typography variant="paragraph" className="my-3">
                  Custom websites designed to engage and convert. Our responsive
                  designs ensure a seamless user experience across all devices.
                </Typography>
                <Button variant="filled">Learn More</Button>
              </Card>
            </div>

            <div className="w-full md:w-4/12 px-4 mb-6">
              <Card className="px-4 py-4">
                <Typography variant="h5" className="font-bold">
                  Blockchain Development
                </Typography>
                <Typography variant="paragraph" className="my-3">
                  We provide end-to-end blockchain development services
                  including smart contracts, wallets, and decentralized
                  applications.
                </Typography>
                <Button variant="filled">Learn More</Button>
              </Card>
            </div>

            <div className="w-full md:w-4/12 px-4 mb-6">
              <Card className="px-4 py-4">
                <Typography variant="h5" className="font-bold">
                  App Development
                </Typography>
                <Typography variant="paragraph" className="my-3">
                  We develop custom mobile applications for iOS and Android
                  platforms, ensuring a seamless user experience. Our apps are
                  designed to engage and convert.
                </Typography>
                <Button variant="filled">Learn More</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  )
}

export default Services
