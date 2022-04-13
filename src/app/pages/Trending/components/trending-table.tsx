/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import { toAbsoluteUrl } from '../../../../_metronic/helpers'
import { Select } from '../../../components/Select'
type Props = {
    className?: string
}

const options: string[] = ["1D", "3D", "4D", "5D", "7D", "15D"]
const categories: string[] = ["All", "Land", "Collectibles", "Photograph", "Music"]
const theads: string[] = ['Name', 'Supply', 'Sales', 'Average Price', 'Floor Price', 'Status']
const data = [1, 1, 1, 1, 1, 1, 1, 1]

export const TrendingTable: React.FC<Props> = ({ className }) => {

    const [selected, setselected] = useState(options[0])
    const [category, setCategory] = useState(categories[0])

    return (
        <div className={`card ${className}`}>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Trending Collections</span>
                    <span className='text-muted mt-1 fw-bold fs-7'>n results for {selected} {category}</span>
                </h3>
                <div className='flex my-2 gap-4'>
                    <Select options={options} setSelected={setselected} selected={selected} />
                    <Select options={categories} setSelected={setCategory} selected={category} />
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
                            {data.map(x => <TR />)}
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

const TR: FC = () => {
    return (<>
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
                <a href='#' className='text-dark fw-bolder text-hover-primary fs-6 flex justify-end cursor-pointer'>
                    <img src='https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.svg' className='h-25px cursor-pointer' alt="" />
                </a>
            </td>
        </tr>
    </>)
}


interface TDProps {
    children: React.ReactNode
}

const TD: FC<TDProps> = ({ children }) => {
    return (<>
        <td>
            <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                {children}
            </a>
        </td>
    </>)
}