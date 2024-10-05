'use client'
import React, { useContext, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import '@/styles/Auth.css'
import Logo from '@/images/Vector(1).png'
import { IoKeyOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { AuthContext } from '@/context/AuthContext'
import { AuthContextType } from '@/interfaces/Userinterface'
const Loader = dynamic(() => import('@/app/loading'));

export default function login() {
    const { currentUser } = useContext(AuthContext) as AuthContextType
    const cookies = new Cookies();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()
    const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        if (!email || !password) {
            setLoading(false)
            toast.error("Please fill the form")
        }
        else {
            await axios.post(`https://sunchase.backend.aait-d.com/api/login`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then((res) => {
                    if (res.data.status == "success") {
                        toast.success(res.data.message);
                        cookies.set("DATA", res.data.data, {
                            path: "/",
                        });
                        router.push('/')
                        setLoading(false)
                    }
                    else {
                        toast.error(res.data.message)
                        setLoading(false)
                        setEmail('')
                        setPassword('')
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                    setLoading(false)
                })
        }
    }
    // useEffect(() => {
    //     if (currentUser) {
    //         router.push('/')
    //     }
    // }, [currentUser])
    return (
        <>
            {loading ? <Loader />
                : <section className='register'>
                    <div className="form-box h-full lg:w-[700px] w-full bg-white absolute top-0 right-0 p-4 lg:px-24 px-6 grid place-content-center">
                        <form className='w-full' >
                            <Image className='logo w-[185px] h-[75px] rounded-fulll m-[28px_auto]' src={Logo} alt="logo" />
                            <div className='input-box mb-6 inline-block w-full'>
                                <label className='flex capitalize items-center mb-3 text-lg font-medium'><MdOutlineMailOutline className='mr-2' size={25} /> Email address</label>
                                <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="email" id='email' name='email' placeholder='enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='input-box mb-6 inline-block w-full relative'>
                                <label className='flex capitalize items-center mb-3 text-lg font-medium'><IoKeyOutline className='mr-2' size={25} /> password</label>
                                <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-black placeholder:text-[var(--third-black)] placeholder:capitalize' type='password' id='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <Link href={'forgetpassword'} className='inline-block text-lg font-medium capitalize mb-6'>forget password</Link>
                            <button onClick={handleLogin} type="submit" className="w-full bg-[#2d2d2d] text-white p-5 mb-3">
                                Login
                            </button>
                        </form>
                        <p className='account flex md:flex-col flex-row  justify-center  capitalize'>don't have an account ?
                            <Link className='flex items-center mb-3 text-lg font-medium  ml-2' href="/register"> Create Account</Link>
                        </p>
                    </div>
                </section>

            }

        </>

    )
}
