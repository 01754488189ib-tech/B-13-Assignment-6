import { GiShoppingCart } from 'react-icons/gi';
import { toast } from 'react-toastify';

const SelectedCard = ({ selectedCard, setSelectedCard }) => {
    const totalPrice = selectedCard.reduce((sum, item) => sum + item.price, 0);

    const removeCard = (id) => {
        setSelectedCard(selectedCard.filter(item => item.id !== id));
        toast.info("Item removed from cart");
    };

    const handlePurchase = () => {
        if (selectedCard.length === 0) return;
        setSelectedCard([]);
        toast.success("Purchase Successful!");
    };

    return (
        <div className='w-11/12 md:w-10/12 mx-auto my-12 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden'>
            <div className="bg-gray-50 p-6 border-b">
                <h1 className='text-3xl font-bold text-gray-800'>Your Cart ({selectedCard.length})</h1>
            </div>

            <div className="p-6">
                {selectedCard.length === 0 ? (
                    <div className='text-center py-20'>
                        <GiShoppingCart className='text-9xl text-gray-200 mx-auto mb-4'/>
                        <h2 className='text-2xl font-bold text-gray-400'>Your cart is empty</h2>
                        <p className='text-gray-400'>Start adding some amazing tools!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {selectedCard.map(card => (
                            <div key={card.id} className="flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-200 p-4 rounded-2xl hover:border-indigo-300 transition-colors">
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <img src={card.icon} alt="" className='size-16 rounded-xl border p-1 object-contain' />
                                    <div>
                                        <h2 className="font-bold text-lg text-gray-800">{card.name}</h2>
                                        <p className="text-indigo-600 font-bold">${card.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeCard(card.id)}
                                    className='mt-4 sm:mt-0 px-6 py-2 bg-red-50 text-red-500 rounded-full font-bold hover:bg-red-100 transition-all border border-red-100'
                                >Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedCard.length > 0 && (
                <div className="bg-gray-50 p-8 border-t space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-medium text-gray-600">Total Investment:</span>
                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button
                        onClick={handlePurchase}
                        className="w-full py-4 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-xl shadow-lg hover:opacity-90 transition-all"
                    >
                        Complete Purchase
                    </button>
                </div>
            )}
        </div>
    );
};

export default SelectedCard;