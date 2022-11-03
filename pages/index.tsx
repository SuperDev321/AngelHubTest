import type { NextPage } from 'next'
import Head from 'next/head'
import InvestCard from '../components/InvestCard'
import Portfolio from '../components/Portfolio'
import useInvests from '../hooks/invests'
import usePortfolios from '../hooks/portfolio'

const Home: NextPage = () => {
  const invests = useInvests()
  const portfolios = usePortfolios()

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <div className='container mx-auto flex flex-col items-center m-2 mt-7'>
          <h1 className='text-2xl font-semibold text-center m-3'>
            Investment Opportunities
          </h1>
          <div className='text-center w-4/5'>
            Investment opportunities on this platform are available to only
            Professional Investors as defined in the Securities and Futures
            Ordinance (SFO) of Hong Kong SAR
          </div>
          <div className='content w-full p-5 sm:grid max-sm:flex sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 overflow-auto'>
            {invests.map(
              ({ header, image, subHeader, description, logo }, index) => (
                <div className='max-sm:min-w-[70%]'>
                  <InvestCard
                    key={index}
                    header={header}
                    image={image}
                    subHeader={subHeader}
                    description={description}
                    logo={logo}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className='container w-full h-full flex p-2 flex-col gap-3 mt-10'>
          <h1 className='text-2xl font-semibold text-center m-3'>
            Successful Portfolio Companies
          </h1>
          <div className='p-5 w-full h-full hidden p-2 sm:flex gap-3'>
            <div className='flex gap-3 flex-col' style={{ width: '50%' }}>
              {portfolios.map(
                ({ header, companies }, index) =>
                  index % 2 === 0 && (
                    <div key={index} className='p-1'>
                      <Portfolio header={header} companies={companies} />
                    </div>
                  )
              )}
            </div>
            <div className='flex gap-3 flex-col' style={{ width: '50%' }}>
              {portfolios.map(
                ({ header, companies }, index) =>
                  index % 2 === 1 && (
                    <div key={index} className='p-1'>
                      <Portfolio header={header} companies={companies} />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className='p-5 w-full h-full hidden p-2 max-sm:flex flex-col gap-3'>
            {portfolios.map(({ header, companies }, index) => (
              <div key={index} className='p-1'>
                <Portfolio header={header} companies={companies} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
