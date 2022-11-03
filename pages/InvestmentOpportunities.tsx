import InvestCard from '../components/InvestCard'
import useInvests from '../hooks/invests'

const InvestmentOpportunities = () => {
  const invests = useInvests()

  return (
    <div className='container mx-auto flex flex-col items-center m-2 mt-7 p-5'>
      <h1 className='text-2xl text-center'>Investment Opportunities</h1>
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
  )
}

export default InvestmentOpportunities
