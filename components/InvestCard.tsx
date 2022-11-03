interface InvestCardProps {
  image?: string
  header: string
  subHeader: string
  description: string
  logo: string
}

const InvestCard = ({
  image,
  header,
  subHeader,
  description,
  logo,
}: InvestCardProps) => {
  return (
    <div
      className='flex w-full h-full flex-col text-left'
      style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)' }}>
      <div className='bg-black text-white pl-2 pt-1 pb-1'>#{header}</div>
      <div className='w-full relative' style={{ paddingBottom: '60%' }}>
        <img
          src={image ?? ''}
          alt={'invest-img'}
          className='absolute inset-0 w-full h-full'
        />
        <img
          src={logo ?? ''}
          alt={'invest-logo'}
          className='absolute'
          style={{ right: 20, bottom: -20, width: 40, height: 40 }}
        />
      </div>
      <div className='grow p-4'>
        <div className='font-semibold'>{subHeader}</div>
        <div>{description}</div>
      </div>
      <div className='flex items-center justify-center p-2'>
        <button
          className='bg-yellow-600 m-2'
          style={{
            width: 'calc(100% - 20px)',
            height: 40,
            top: 544,
          }}>
          Invest Now
        </button>
      </div>
      <div></div>
    </div>
  )
}

export default InvestCard
