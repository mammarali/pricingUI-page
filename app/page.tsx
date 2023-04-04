import Header from './components/desktop/header'
import Pricing from './components/desktop/pricing'
import Features from './components/desktop/features'
import HeaderMobile from './components/mobile/header'
import PricingMobile from './components/mobile/pricing'
import FeaturesMobile from './components/mobile/features'

export default function Home() {
  return (
    <div className='flex bg-gray-200 gap-x-6'>
      <div>
        <Header></Header>
        <Pricing></Pricing>
        <Features></Features>
      </div>

      <div>
        <HeaderMobile></HeaderMobile>
        <PricingMobile></PricingMobile>
        <FeaturesMobile></FeaturesMobile>
      </div>

    </div>
  )
}
