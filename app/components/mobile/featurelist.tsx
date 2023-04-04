import React from 'react'
import Image from 'next/image'

export default function Featureitem(props: any) {
    return (
        <div className='flex items-center mb-[36px]  '>
            <div>
                <Image src={props.icon} alt="Icon" width="33" height="33"></Image>
            </div>
            <div className='font-inter text-[18px] font-[700] leading-[24px] text-[#171923] ml-[33px]  '>
                {props.feature}
            </div>
        </div>
    )
}
