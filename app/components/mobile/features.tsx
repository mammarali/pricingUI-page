import React from 'react'
import Image from 'next/image'
import styles from './features.module.css'
import Featureitem from './featurelist'

export default function FeaturesMobile() {
    return (
        <div className={styles.featureBox}>
            <Featureitem feature="30 days money back Guarantee" icon="./shield.svg"></Featureitem>

            <Featureitem feature="No setup fees 100% hassle-free" icon="./free.svg"></Featureitem>

            <Featureitem feature="No monthly subscription Pay once and for all" icon="./loop.svg"></Featureitem>
        </div>
    )
}
