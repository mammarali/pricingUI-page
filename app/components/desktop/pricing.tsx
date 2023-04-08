import styles from './pricing.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Listitem from './listitem'

export default function Pricing() {
    return (
        <div className={styles.card}>
            <div className={styles.PriceBox}>
                <span className='font-inter leading-[32px] text-[24px] font-[800] pt-[57px] pb-[16px]'>Premium PRO</span>
                <span className='font-inter leading-[60px] text-[60px] font-[800] pb-[8px]'>$329</span>
                <span className='font-inter leading-[28px] text-[18px] font-[500] pb-[24px]'>billed just once</span>
                <Link href="#" className={styles.priceButton}>Get Started</Link>
            </div>
            <div className={styles.FeatureBox}>
                <div className='w-[520px] h-[56px] font-inter leading-[28px] text-[18px] font-[400] text-[#2D3748] ml-[48px] mr-[48px] mt-[48px] mb-[27px]'>
                    Access these features when you get this pricing package for your business.
                </div>

                <Listitem feature="International calling and messaging API"></Listitem>
                <Listitem feature="Additional phone numbers">
                </Listitem>
                <Listitem feature="Automated messages via Zapier">
                </Listitem>
                <Listitem feature="24/7 support and consulting">
                </Listitem>

            </div>
        </div>
    )
}
