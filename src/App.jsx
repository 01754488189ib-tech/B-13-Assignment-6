import { Suspense, useState, useMemo } from 'react';
import './App.css';
import Banner from './componemts/Banner/Banner';
import Card from './componemts/Card/Card';
import Navbar from './componemts/Navber/Navber';
import Statistics from './componemts/Statistics/Statistics';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StepSection from './componemts/StepSection/StepSection';
import PricingTable from './componemts/PricingTable/PricingTable';
import Transform from './componemts/Transform/Transform';
import Footer from './componemts/Footer/Footer';

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const cardPromise = useMemo(() => fetchData(), []);
  const [selectedCard, setSelectedCard] = useState([]);

  return (
    <>
      <Navbar selectedcard={selectedCard} />
      <Banner />
      <Statistics />
      <Suspense fallback={<div className='text-center text-2xl font-bold mt-10'><span className="loading loading-spinner loading-lg"></span></div>}>
        <Card
          cardPromise={cardPromise}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      </Suspense>
      <StepSection />
      <PricingTable />
      <Transform />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;