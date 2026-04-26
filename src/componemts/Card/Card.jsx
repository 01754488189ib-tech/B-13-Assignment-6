import { use, useState } from 'react';
import AllCard from '../AllCard/AllCard';
import SelectedCard from '../SelectedCard/SelectedCard';

const Card = ({ cardPromise, selectedCard, setSelectedCard }) => {
    const CardData = use(cardPromise);
    const [selectedTab, setSelectedTab] = useState('products');

    return (
        <div id="products-section">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center w-11/12 md:w-10/12 mx-auto mt-10 border border-gray-100">
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Premium Digital Tools</h2>
                <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity.</p>

                <div className="flex bg-gray-100 p-1.5 rounded-full w-fit mx-auto shadow-inner border border-gray-200">
                    <button
                        onClick={() => setSelectedTab('products')}
                        className={`px-8 py-2.5 rounded-full transition-all font-semibold ${selectedTab === 'products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}>
                        Products
                    </button>
                    <button
                        onClick={() => setSelectedTab('cart')}
                        className={`px-8 py-2.5 rounded-full transition-all font-semibold ${selectedTab === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}>
                        Cart ({selectedCard.length})
                    </button>
                </div>
            </div>

            {selectedTab === 'products' ? 
                <AllCard CardData={CardData} selectedCard={selectedCard} setSelectedCard={setSelectedCard} /> :
                <SelectedCard selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
            }
        </div>
    );
};

export default Card;