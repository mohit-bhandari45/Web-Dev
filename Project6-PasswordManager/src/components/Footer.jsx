import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 flex flex-col text-white justify-center items-center w-full'>
            <div className="logo font-bold text-2xl">
                <span className="text-green-500">&lt;</span>
                Pass
                <span className="text-green-500">OP/&gt;</span>

            </div>
            <div className='flex justify-center items-center'>
                Created with <img className='w-5 h-5 mx-2' src="https://imgs.search.brave.com/1M4ieKNsfzcjhYTlGGNr4X4WgYmdQtNQK7DbSwi5HM4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzEtMTk3NTFf/dmFsZW50aW5lLWhl/YXJ0LXBuZy10cmFu/c3BhcmVudC0zZC1y/ZWQtaGVhcnQtcG5n/LnBuZw" alt="" /> by Mohit Bhandari
            </div>

        </div>
    )
}

export default Footer
