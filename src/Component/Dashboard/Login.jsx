import { useState } from 'react'
import toast from 'react-hot-toast'
import axiosInstance from '../../Config/Axiosinstance'
import { useNavigate } from 'react-router'

const Login = () => {
    const [credential, setCredential] = useState({
        email: 'Kushallaxkar9@gmail.com',
        password: 'Kushal@06176'
    })
    const navigate = useNavigate()

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

    const login = async (e) => {
        e.preventDefault()
        toast.dismiss()

        if (!credential.email.trim()) {
            errorToast('Email is required')
            return
        }

        if (!credential.password.trim()) {
            errorToast('Password is required')
            return
        }
        try {
            const res = await axiosInstance.post('/auth/login', credential)

            localStorage.setItem('token', res.data.token)
            toast.success('Login successfully')
            navigate('/dashboard')
        } catch (error) {
            toast.error(
                error?.response?.data?.message || "Invalid credentials"
            );
        }
    }
    return (
        <div className="flex justify-center items-center" style={{ height: '97vh' }}>
            <form onSubmit={login} className="flex flex-col gap-3 w-80">

                <h1 className="text-lg text-center">Sign-Up for Admin</h1>

                <input
                    type="text"
                    placeholder="Email"
                    value={credential.email}
                    onChange={(e) => setCredential({ ...credential, email: e.target.value })}
                    className="border border-purple-500 p-2 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={credential.password}
                    onChange={(e) => setCredential({ ...credential, password: e.target.value })}
                    className="border border-purple-500 p-2 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                    type="submit"
                    className="bg-purple-600 text-white p-2 rounded-lg"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Login
