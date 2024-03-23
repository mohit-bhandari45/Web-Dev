import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordarray, setpasswordarray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordarray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        if (ref.current.src.includes("icons/eye-stroke-rounded.svg")) {
            ref.current.src = "icons/suspicious-stroke-rounded.svg"
            passwordRef.current.type = "text"
        } else {
            ref.current.src = "icons/eye-stroke-rounded.svg"
            passwordRef.current.type = "password"
        }
    }

    const savePassword = () => {
        // console.log(form)
        setpasswordarray([...passwordarray, form])
        localStorage.setItem("password", JSON.stringify([...passwordarray, form]))
        // console.log([...passwordarray, form])
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        alert("Copied")
        navigator.clipboard.writeText(text)
    }



    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className="mycontainer w-[80vw]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input onChange={handleChange} value={form.site} placeholder='Enter Website URL' className='rounded-full border border-green-400 w-full text-black px-4 py-1' type="text" name="site" id="" />
                    <div className="flex w-full gap-8 justify-between">
                        <input onChange={handleChange} value={form.username} placeholder='Enter Username' className='rounded-full border border-green-400 w-full text-black px-4 py-1' type="text" name="username" id="" />
                        <div className="relative">
                            <input ref={passwordRef} onChange={handleChange} value={form.password} placeholder='Enter Password' className='rounded-full border border-green-400 w-full text-black px-4 py-1' type="password" name="password" id="" />
                            <span className='absolute right-[4px] top-[3px] cursor-pointer' onClick={showPassword}>
                                <img width={26} ref={ref} className='p-1' src="icons/eye-stroke-rounded.svg" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center bg-green-400 gap-2 rounded-full px-8 border border-green-900 py-2 items-center w-fit hover:bg-green-300'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                        Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-xl py-4'>Your Passwords</h2>
                    {passwordarray.length === 0 && <div>No Passwords to show</div>}
                    {passwordarray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordarray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='text-center flex justify-center items-center  py-2 border-white'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='flex justify-center items-center pt-2 copy cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                                    <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-2 border-white'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <span>{item.username}</span>
                                            <div className='flex justify-center items-center pt-2 copy cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                                    <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center py-2 border-white'>
                                        <div className='flex justify-center items-center gap-2'>
                                            <span>{item.password}</span>
                                            <div className='flex justify-center items-center pt-2 copy cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                                    <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
