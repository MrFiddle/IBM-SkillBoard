import React from 'react'
import CertificationRow from '../CertificationRow/CertificationRow'

const DashboardTable = () => {
  const certificate = {
    id: "1",
    name: "SCRUM Master Certificate",
    type: "IBM",
    categories: [
      { id: "1", name: "SCRUM" },
      { id: "2", name: "Organization" },
    ],
    expiration_date: "Feb 14th, 2099",
  };


  return (
    <div className='flex flex-col w-[80vw]'>

      <div className='flex flex-row justify-between items-center'>
        <select className='rounded-md p-2 drop-shadow-xl pr-16'>
          <option value='' disabled selected hidden className='font-semibold'>
            <p><span className='text-red text-[3rem]'>•</span>Industry</p>
          </option>
          <option value=''>All</option>
          <option value=''>IBM</option>
          <option value=''>Microsoft</option>
          <option value=''>Google</option>
        </select>
        <p className='font-semibold'>Name</p>
        <p className='font-semibold'>Type</p>
        <p className='font-semibold'>Categories</p>
        <p className='font-semibold'>Industry compatiblity</p>
      </div>

      <CertificationRow certificate={certificate}/>

    </div>
  )
}

export default DashboardTable
