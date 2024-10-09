import CallToAction from "../components/CallToAction"
import AdventureCard from "../components/AdventureCard"
import Carousel from "../components/Carousel"

function Home(){

    return (

        <>
        <div className="bg-gray-900">
            <CallToAction></CallToAction> 
            <div className="flex md:justify-between md:flex-row flex-col px-10">
                <AdventureCard></AdventureCard>
                <Carousel></Carousel>
            </div>
        </div>
        </>

    )


}

export default Home