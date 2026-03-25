import { MessageCircleWarning } from 'lucide-react'
import axiosInstance from '../../Config/Axiosinstance'
import React, { useEffect, useState } from 'react'

const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-yellow-500',
    'bg-teal-500',
]

const getColorFromName = (name = '') => {
    let hash = 0
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }
    return colors[Math.abs(hash) % colors.length]
}

const Reports = () => {
    const [contact, setContact] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchContact = async () => {
        try {
            const res = await axiosInstance.get('/contact')
            setContact(res.data)
            console.log(res.data.contact)
            const data = res?.data?.contact ?? []
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchContact()
    }, [])

    return (
        <div className="select-text p-4">
            {/* Loading State */}
            {loading && (
                <p className="text-center text-gray-500">
                    Loading contacts...
                </p>
            )}

            {/* Empty State */}
            {!loading && contact.length === 0 && (
                <div className="text-center text-xl flex justify-center items-center text-gray-400 " style={{ height: '91vh' }}>
                    <div className='flex items-center gap-2'>
                        No contact reports available <MessageCircleWarning size={20} />
                    </div>
                </div>
            )}

            {/* Data State */}
            {!loading && contact.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contact.map((data, idx) => {
                        const firstLetter = data.name?.charAt(0).toUpperCase()
                        const bgColor = getColorFromName(data.name)

                        return (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div
                                    className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-full text-white font-bold text-lg ${bgColor}`}
                                >
                                    {firstLetter}
                                </div>

                                <div className="space-y-1">
                                    <p className="font-semibold text-gray-800">
                                        {data.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {data.email}
                                    </p>
                                    <p className="text-sm text-gray-700 break-words">
                                        {data.message}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Reports
