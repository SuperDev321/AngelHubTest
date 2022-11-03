import CompanyCard, { CompanyData } from './CompanyCard'

interface PortfolioProps {
  header: string
  companies: Array<CompanyData>
}

const Portfolio = ({ header, companies }: PortfolioProps) => {
  return (
    <div
      className='d-flex w-full'
      style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)' }}>
      <div className='bg-yellow-600 text-white pl-3 pt-2 pb-2'>{header}</div>
      <div className='w-full p-6 sm:grid max-sm:flex lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 overflow-auto'>
        {companies.map((company) => (
          <div>
            <CompanyCard {...company} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
