import Portfolio from '../components/Portfolio'
import usePortfolios from '../hooks/portfolio'

const Portfolios = () => {
  const portfolios = usePortfolios()

  return (
    <div className='w-full h-full flex p-2 flex-col'>
      <h1 className='text-2xl text-center'>Successful Portfolio Companies</h1>
      <div className='p-5 w-full h-full hidden p-2 sm:flex'>
        <div style={{ width: '50%' }}>
          {portfolios.map(
            ({ header, companies }, index) =>
              index % 2 === 0 && (
                <div key={index} className='p-1'>
                  <Portfolio header={header} companies={companies} />
                </div>
              )
          )}
        </div>
        <div style={{ width: '50%' }}>
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
      <div className='p-5 w-full h-full hidden p-2 max-sm:flex flex-col'>
        {portfolios.map(({ header, companies }, index) => (
          <div key={index} className='p-1'>
            <Portfolio header={header} companies={companies} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolios
