import { use, useState } from 'react';
import AllCard from '../AllCard/AllCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const Card = ({ cardPromise, selectedCard, setSelectedCard }) => {
    const CardData = use(cardPromise);
    const [selectedTab, setSelectedTab] = useState('products');

    return (
        <div>
            <div className="premium-digital-tools bg-white p-8 rounded-lg shadow-md text-center w-10/12 mx-auto mt-10">
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>Premium Digital Tools</h2>
                <p className='text-gray-600 mb-6'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                <div className="flex flex-col md:flex-row bg-gray-200 p-2 rounded-3xl md:rounded-full w-full md:w-max mx-auto shadow-inner">

                    <button
                        onClick={() => setSelectedTab('products')}
                        className={`${selectedTab === 'products' ? 'bg-gradient-to-r from-[#9514FA] to-[#4F39F6] text-white' : 'bg-white hover:scale-105 transition-transform text-gray-800'} px-8 py-3 rounded-t-4xl md:rounded-l-full md:rounded-tr-none hover:bg-blue-700 transition-all font-semibold`}>
                        Products
                    </button>

                    <button
                        onClick={() => setSelectedTab('cart')}
                        className={`${selectedTab === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white hover:scale-105 transition-transform text-gray-800'} px-8 py-3 rounded-b-4xl md:rounded-r-full md:rounded-bl-none hover:bg-blue-700 transition-all font-semibold`}>
                        Cart ({selectedCard.length})
                    </button>

                </div>
            </div>

            {selectedTab === 'products' ? 
            <AllCard CardData={CardData} selectedCard={selectedCard} setSelectedCard={setSelectedCard} /> :
            <SelectedCard selectedCard={selectedCard} setSelectedCard={setSelectedCard}></SelectedCard>}
        </div>
    );
};

export default Card;