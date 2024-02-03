import React from 'react'

export default function SectionTitle({ heading, subHeading }) {
  return (
    <div className='text-center py-12 md:w-1/3 mx-auto'>
      <p className='text-yellow-500 pb-2 text-lg'>--- {subHeading} ---</p>
      <h3 className='text-3xl uppercase py-4 border-y-4'>{heading}</h3>
    </div>
  )
}