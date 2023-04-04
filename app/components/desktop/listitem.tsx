import React from 'react'
import Image from 'next/image'

export default function Listitem(props: any) {
    return (
        <div className='flex mb-[16px] '>
            <div className='ml-[48px] self-center'>
                <Image src="/tickIcon.svg" alt="Tick Icon" width="22" height="22"></Image>
            </div>
            <div className='font-inter text-[18px] font-[400] 
            leading-[28px] text-[#2D3748] self-center ml-[20px]'>
                {props.feature}
            </div>
        </div>
    )
}
