import { RiGithubFill } from '@remixicon/react'
import { FileText, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../Config/Axiosinstance'

const FirstPage = () => {
    // const [totalCount, setTotalCount] = useState(0)

    // const fetchRequest = async () => {
    //     try {
    //         const res = await axiosInstance.get('/admin')
    //         const latestCount = res.data[0]?.count || 0
    //         setTotalCount(latestCount)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchRequest()
    // }, [])

    return (
        <div className='flex justify-center items-center min-h-[85vh] px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-4xl'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight'>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <Sparkles className='hidden sm:inline-block' />
                        <span>Free unlimited REST APIs for building and testing applications</span>
                    </div>
                </h1>

                <div className='flex text-center justify-center mt-6 sm:mt-8 text-xl sm:text-2xl font-bold'>
                    <div className='flex items-center gap-3'>
                        <p>Text, Practice, and Grow</p>
                        <Sparkles className='hidden sm:inline-block' />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-center mt-8 sm:mt-10 gap-4 sm:gap-6'>
                    <a
                        href='https://github.com/Kuldeep7dev'
                        target="_blank"
                        className='text-white cursor-pointer p-3 sm:px-6 rounded-lg text-center bg-purple-600 flex items-center justify-center gap-1.5 shadow-lg shadow-purple-500 hover:shadow-neutral-50 hover:duration-600 min-w-[180px]'
                    >
                        <RiGithubFill />
                        View Github
                    </a>

                    <Link
                        to='/docs'
                        className='cursor-pointer p-3 sm:px-6 rounded-lg shadow-sm border shadow-black hover:shadow-neutral-50 hover:duration-600 flex items-center justify-center gap-1.5 min-w-[180px]'
                    >
                        <FileText />
                        Read Docs
                    </Link>
                </div>

                {/* <div>
                    <p className="flex justify-center mt-6 text-sm">
                        Serving <b className="mx-1.5">{totalCount}</b> API requests every month
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default FirstPage