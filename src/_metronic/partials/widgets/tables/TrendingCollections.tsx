/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'

type Props = {
  className?: string
}

const options: number[] = [1, 3, 4, 5, 7, 15]
const theads: string[] = ['Name', 'Volume', 'Sales', 'Floor', 'Supply', 'Royalty', 'Explore']

const TrendingCollectionsTable: React.FC<Props> = ({ className }) => {
  const [selected, setselected] = useState('1')
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Trending Collections</span>
          <span className='text-muted mt-1 fw-bold fs-7'>n results for {selected}D</span>
        </h3>
        <div className='d-flex my-2'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-white form-select-sm w-125px'
            defaultValue='Online'
            onChange={(e) => setselected(e.target.value)}
          >
            {options.map(x => <option value={x}>{x}D</option>)}
          </select>
        </div>
      </div>

      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4 w-full'>
            <thead>
              <tr className='fw-bolder text-muted'>
                {theads.map((x, idx) => <th className={theads.length - 1 === idx ? 'text-end' : 'w-auto'}>{x}</th>)}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className='flex items-center w-60 overflow-hidden'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column whitespace-nowrap'>
                      <a href='#' className='text-dark fw-bolder text-hover-primary whitespace-nowrap'>
                        Ana Simmons
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    345
                  </a>
                </td>

                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    78
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    56
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    45
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                    5%
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bolder text-hover-primary fs-6 flex justify-end cursor-pointer'>
                    <img src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg' className='h-25px cursor-pointer' alt="" />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TrendingCollectionsTable }
