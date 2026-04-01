import { Suspense, useState } from 'react'
import './App.css'
import Banner from './componemts/Banner/Banner'
import Card from './componemts/Card/Card'
import Navber from './componemts/Navber/Navber'
import Statistics from './componemts/Statistics/Statistics'
import { ToastContainer } from 'react-toastify'
import StepSection from './componemts/StepSection/StepSection'
import PricingTable from './componemts/PricingTable/PricingTable'
import Transform from './componemts/Transform/Transform'
import Footer from './componemts/Footer/Footer'

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const cardPromise = fetchData();
  const [selectedCard, setSelectedCard] = useState([]);

  return (
    <>
      <Navber selectedcard={selectedCard}></Navber>
      <Banner></Banner>
      <Statistics></Statistics>
      <Suspense fallback={<div className='text-center text-2xl font-bold mt-10'><span className="loading loading-spinner loading-xl"></span></div>}>
        <Card 
          cardPromise={cardPromise} 
          selectedCard={selectedCard} 
          setSelectedCard={setSelectedCard} 
        ></Card>
      </Suspense>
      <StepSection></StepSection>
      <PricingTable></PricingTable>
      <Transform></Transform>
      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App