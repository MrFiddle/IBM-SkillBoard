import React from 'react'
import CertificationRow from '../CertificationRow/CertificationRow'
import { Certificates } from '../../../lib/types'

interface Props {
  certificates: Certificates
}

const DashboardTable = ({ certificates }: Props) => {
  console.log(certificates)
  return (
    <div className='flex flex-col w-[70vw] h-[100%]'>

      <div className='flex flex-row justify-between items-center'>
        <select className='rounded-md p-2 drop-shadow-xl pr-16'>
          <option value='' disabled selected hidden className='font-semibold'>
            Industry
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
      <div className='overflow-auto'>
        {certificates['certificates'].map((certificate) => (
          <CertificationRow key={certificate.id} certificate={certificate} />
        ))}
      </div>

    </div>
  )
}

export default DashboardTable
