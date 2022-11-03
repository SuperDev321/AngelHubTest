import { useMemo } from 'react'

export interface CompanyData {
  image: string
  mark?: boolean
  exit?: boolean
  multiple?: number
}

const CompanyCard = ({ image, mark, exit, multiple }: CompanyData) => {
  const logoWidth = useMemo(() => {
    if (multiple) return 50
    else return 40
  }, [multiple])

  return (
    <div className='relative w-full text-white' style={{ minWidth: 100 }}>
      <img src={image} className='w-full ' />
      {mark ? (
        <div
          className='absolute'
          style={{
            width: logoWidth,
            height: logoWidth,
            zIndex: 10,
            bottom: -logoWidth / 2,
            right: `calc(50% - ${logoWidth / 2}px)`,
          }}>
          <div
            className='w-full h-full flex justify-center items-center flex-col bg-yellow-600 text-[7px]'
            style={{ borderRadius: '50%' }}>
            <div>MARK</div>
            <div>UP</div>
          </div>
        </div>
      ) : exit ? (
        <div
          className='absolute'
          style={{
            width: logoWidth,
            height: logoWidth,
            zIndex: 10,
            bottom: -logoWidth / 2,
            right: `calc(50% - ${logoWidth / 2}px)`,
          }}>
          <div
            className='w-full h-full flex justify-center items-center flex-col bg-yellow-600 text-[7px]'
            style={{ borderRadius: '50%' }}>
            <div>EXIT</div>
            {multiple && (
              <>
                <div className='font-semibold text-[10px]'>{multiple}X</div>
              </>
            )}
            <div>RETURN</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CompanyCard
