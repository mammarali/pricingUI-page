import React from 'react'
import Image from 'next/image'

export default function Featureitem(props: any) {
    return (
        <div className='flex  mr-[25px] w-[288px] h-[48px] '>
            <div className='self-center' >
                <Image src={props.icon} alt="Shield Icon" width="62" height="62"></Image>
            </div>
            <div className='self-center font-inter text-[18px] font-[700] leading-[24px] text-[#171923] ml-[25px]  '>
                {props.feature}
            </div>
        </div>
    )
}
