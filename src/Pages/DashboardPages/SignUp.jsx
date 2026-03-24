import { useState } from "react";
import axiosInstance from "../../Config/Axiosinstance";
import toast from "react-hot-toast";

const SignUp = () => {
    const [admin, setAdmin] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const errorToast = (msg) => {
        toast.error(msg, {
            position: 'top-right',
            style: {
                border: '1px solid black',
                color: 'black'
            },
            iconTheme: {
                primary: 'black',
                secondary: 'white',
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault()
        toast.dismiss()

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!admin.userName.trim()) {
            errorToast('Name is required')
            return
        }

        if (!admin.email.trim()) {
            errorToast('Email is required')
            return
        }

        if (!emailRegex.test(admin.email)) {
            errorToast('Please enter a valid email')
            return
        }

        if (!passwordRegex.test(admin.password)) {
            errorToast('Password must be 8+ chars, uppercase, lowercase, number & symbol')
        }

        if (!admin.password.trim()) {
            errorToast('Password is required')
            return
        }

        if (admin.password !== admin.confirmPassword) {
            errorToast("Passwords don't match");
            return
        }

        try {
            const res = await axiosInstance.post('/admin', admin)
            console.log(res.data.admin)

            toast.success('Admin created successfully', {
                position: 'top-right',
                style: {
                    border: '1px solid #7C3AED',
                    color: '#7C3AED'
                },
                iconTheme: {
                    primary: '#7C3AED'
                }
            })

            setAdmin({
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong', {
                position: 'top-right',
                style: {
                    background: '#000000',
                    color: '#ffffff'
                }
            })
        }
    }
    return (
        <div className="flex justify-center items-center" style={{ height: "95vh" }}>
            <form onSubmit={postData} className="flex flex-col gap-4 w-80">

                <h1 className="text-lg text-center font-medium">
                    Sign-Up for Admin Panel
                </h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={admin.userName}
                    onChange={(e) => setAdmin({ ...admin, userName: e.target.value })}
                    className="
            border border-purple-500 p-2 rounded-lg
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-purple-500
            hover:border-purple-600
          "
                />

                {/* Email */}
                <input
                    type="text"
                    placeholder="Email"
                    value={admin.email}
                    onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
                    className="
            border border-purple-500 p-2 rounded-lg
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-purple-500
            hover:border-purple-600
          "
                />

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password"
                    value={admin.password}
                    onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
                    className="
            border border-purple-500 p-2 rounded-lg
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-purple-500
            hover:border-purple-600
          "
                />

                {/* Confirm Password */}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={admin.confirmPassword}
                    onChange={(e) => setAdmin({ ...admin, confirmPassword: e.target.value })}
                    className="
            border border-purple-500 p-2 rounded-lg
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-purple-500
            hover:border-purple-600
          "
                />

                {/* Button */}
                <button
                    type="submit"
                    className="
            bg-purple-600 text-white p-2 rounded-lg
            transition-all duration-200
            hover:bg-purple-700
            active:scale-95
          "
                >
                    Submit
                </button>

            </form>
        </div>
    );
};

export default SignUp;
