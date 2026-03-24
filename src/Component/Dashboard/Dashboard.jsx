import { MessageCircleWarning } from "lucide-react";
import { useEffect, useState } from "react";
import axiosInstance from "../../Config/Axiosinstance";

const Dashboard = () => {
    const [contactCount, setContactCount] = useState()


    const getCount = async () => {
        try {
            const res = await axiosInstance.get('/contact/get-count')

            setContactCount(res.data.contact)



        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getCount()
    }, [])

    return (
        <div className="select-text p-4">
            <div className="max-w-sm rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-800">
                            Contact Reports
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Total reports received
                        </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <MessageCircleWarning size={22} />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="text-3xl font-bold text-gray-900">{contactCount}</p>
                    <p className="text-sm text-gray-500">Reports</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
