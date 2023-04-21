import React from 'react'
import CertificationRow from '../CertificationRow/CertificationRow'
import { Certificates } from '../../../lib/types'
import './DashboardTable.css'

interface Props {
  certificates: Certificates
}

const DashboardTable = ({ certificates }: Props) => {
  return (
    <div className='flex flex-col w-[100%] h-[100%] DashboardTable'>

      <div className='DashboardTable_Filters'>
      <select className='rounded-md p-2 drop-shadow-xl pr-16' defaultValue='' >
        <option value='' disabled hidden className='font-semibold'>
          Industry
        </option>
        <option value=''>All</option>
        <option value='IBM'>IBM</option>
        <option value='Microsoft'>Microsoft</option>
        <option value='Google'>Google</option>
      </select>

        <p className='font-semibold'>Name</p>
        <p className='font-semibold'>Type</p>
        <p className='font-semibold'>Categories</p>
        <p className='font-semibold'>Industry compatiblity</p>
      </div>
      <div className='overflow-auto'>
        {certificates['certificates'].map((certificate, index) => (
          <CertificationRow key={`${certificate.id}-${index}`} certificate={certificate} />
        ))}
      </div>

    </div>
  )
}

export default DashboardTable
