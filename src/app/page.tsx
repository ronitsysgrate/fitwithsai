import Hero from '@/components/home/Hero'
import Philosophy from '@/components/home/Philosophy'
import HowItWorks from '@/components/home/HowItWorks'
import Services from '@/components/home/Services'
import FinalCTA from '@/components/home/FinalCTA'

const Page = () => {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Services />
            {/* <Philosophy /> */}
            <FinalCTA />
        </>
    )
}

export default Page