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
    const [error, setError] = useState(null)

    const fetchContact = async () => {
        try {
            const res = await axiosInstance.get('/contact')

            // safer parsing
            if (res?.data?.contact) {
                setContact(res.data.contact)
            } else {
                setContact([])
            }
        } catch (err) {
            console.error(err)
            setError('Failed to load contacts')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchContact()
    }, [])

    return (
        <div className="select-text p-4 ml-0 sm:ml-60 min-h-screen">
            
            {/* Loading */}
            {loading && (
                <div className="flex justify-center items-center h-[80vh]">
                    <p className="text-gray-500 animate-pulse">
                        Loading contacts...
                    </p>
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <div className="flex justify-center items-center h-[80vh] text-red-500">
                    {error}
                </div>
            )}

            {/* Empty */}
            {!loading && !error && contact.length === 0 && (
                <div className="flex justify-center items-center h-[80vh] text-gray-400">
                    <div className="flex items-center gap-2">
                        No contact reports available
                        <MessageCircleWarning size={20} />
                    </div>
                </div>
            )}

            {/* Data */}
            {!loading && !error && contact.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contact.map((data) => {
                        const name = data?.name || 'Unknown'
                        const firstLetter = name.charAt(0).toUpperCase()
                        const bgColor = getColorFromName(name)

                        return (
                            <div
                                key={data._id || data.id} // ✅ FIXED
                                className="flex items-start gap-4 p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg ${bgColor}`}
                                >
                                    {firstLetter}
                                </div>

                                <div className="space-y-1 w-full">
                                    <p className="font-semibold text-gray-800">
                                        {name}
                                    </p>

                                    <p className="text-sm text-gray-600 break-all">
                                        {data?.email || 'No email'}
                                    </p>

                                    <p className="text-sm text-gray-700 break-words">
                                        {data?.message || 'No message'}
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