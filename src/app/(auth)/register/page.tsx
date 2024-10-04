'use client'
import React, { useState } from 'react'
import '@/styles/Auth.css'
import Logo from '@/images/Vector(1).png'
import { IoKeyOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa6'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiImageOn } from 'react-icons/ci'
import { RiQrScan2Line } from 'react-icons/ri'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import Image from 'next/image'
import axios from 'axios'
import Loader from '@/app/loading';


export default function register() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [terms, setTerms] = useState<boolean>(false);
    const [nationalImage, setnationalImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setnationalImage(event.target.files[0])
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegister = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append("full_name", name);
        if (nationalImage) {
            formData.append("national_image", nationalImage);
        }
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", password);
        if (terms) {
            formData.append("terms", '1');
        }

        if (!name || !email || !nationalImage || !password || !terms) {
            setLoading(false)
            toast.error("Please fill the form")
        }
        else {
            await axios.post(`https://sunchase.backend.aait-d.com/api/register`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(async (res) => {
                    console.log(res);
                    if (res.data.status == "success") {
                        toast.success(res.data.message);
                        await axios.post(`https://sunchase.backend.aait-d.com/api/verify`, { email: email, code: '1111' })
                        router.push('/login')
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
                    console.log(err);
                    toast.error(err.message);
                    setLoading(false)
                })
        }

    }
    return (
        <>
            {loading ? <Loader /> :
                <section className='register'>
                    <div className="form-box h-full lg:w-[700px] w-full bg-white absolute top-0 right-0  lg:px-24 px-6">
                        <form className='w-full'>
                            <Image className='logo w-[185px] h-[75px] rounded-fulll m-[5px_auto_28px_auto]' src={Logo} alt="logo" />
                            <div className='input-box mb-4 inline-block w-full'>
                                <label className='flex capitalize items-center mb-3 text-base font-medium' ><FaRegUser className='mr-2' size={20} /> Name</label>
                                <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="text" id='name' name='name' placeholder='enter your full name' value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='input-box mb-4 inline-block w-full'>
                                <label className='flex capitalize items-center mb-3 text-base font-medium'><MdOutlineMailOutline className='mr-2' size={20} /> Email address</label>
                                <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-[var(--third-black)] placeholder:text-[var(--third-black)] placeholder:capitalize' type="email" id='email' name='email' placeholder='enter your email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='input-box mb-6 inline-block w-full relative'>
                                <label className='flex capitalize items-center mb-3 text-base font-medium'><IoKeyOutline className='mr-2' size={20} /> password</label>
                                <input className='w-full p-5 rounded-md bg-[#2d2d2d23] text-black placeholder:text-[var(--third-black)] placeholder:capitalize' type='password' id='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className='input-box mb-4 inline-block w-full relative'>
                                <label className='flex capitalize items-center mb-3 text-base font-medium'><CiImageOn className='mr-2' size={20} /> national ID image</label>
                                <div className="w-full p-5 rounded-md bg-[#2d2d2d23] text-black border-2 border-dotted border-[#2d2d2d] ">
                                    {imagePreview ?
                                        <>
                                            {/* <button onClick={()=>{setImagePreview(null); setnationalImage(null)}} className='absolute top-0 right-0 text-2xl'>X</button> */}
                                            <button className="absolute top-0 right-0" onClick={() => { setImagePreview(null); setnationalImage(null) }}><IoMdClose color="#bf9b30" size={60} /></button>
                                            <img className="w-full h-[120px] rounded-fulll" src={imagePreview} />
                                        </>
                                        :
                                        <div className="upload-box">
                                            <label htmlFor='nationalID' className="upload-icon cursor-pointer flex items-center justify-center capitalize">
                                                <RiQrScan2Line className='mr-4' size={35} color="#2d2d2d" />
                                                scan  national ID
                                            </label>
                                            <input type="file" id="nationalID" accept="image/*" className='hidden'
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='input-box mb-6 inline-block w-full relative'>
                                <input className='mr-3' type="checkbox" name="agree" id="agree" value={'Agree to the terms and conditions'} onChange={() => setTerms(!terms)} />
                                <label className='font-medium capitalize' htmlFor="agree"><span className='text-[#BBB8BF]'>Agree to the</span> terms and conditions</label>
                            </div>
                            <button onClick={handleRegister} type="submit" className="w-full bg-[#2d2d2d] text-white p-5 mb-3 capitalize">
                                create account
                            </button>
                        </form>
                        <p className='account flex justify-center capitalize'>have an acoount ?
                            <Link className='flex items-center mb-3 text-base font-medium  ml-2' href="/login"> Login</Link>
                        </p>
                    </div>
                </section>
            }
        </>
    )
}