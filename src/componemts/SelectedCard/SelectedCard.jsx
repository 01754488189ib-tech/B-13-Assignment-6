import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { toast } from 'react-toastify';

const SelectedCard = ({ selectedCard, setSelectedCard }) => {

    const handleDelete = (card) => {
        const filteredCard = selectedCard.filter(item => item.id !== card.id);
        setSelectedCard(filteredCard);
        toast.error(`${card.name} is removed`, {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const handlePurchaseAll = () => {
        if (selectedCard.length > 0) {
            setSelectedCard([]);
            toast.success("All items have been purchased successfully!", {
                position: "top-center",
                autoClose: 3000,
            });
        } else {
            toast.warn("Your cart is already empty!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className='w-11/12 shadow mx-auto my-10 rounded-4xl pb-10'>
            <h1 className='p-5 font-bold text-3xl'>Your Cart:- ({selectedCard.length})</h1>

            {
                selectedCard.length === 0 ?
                    <div className='text-center my-20 pb-10'>
                        <GiShoppingCart className='text-9xl opacity-40 mx-auto' />

                        <h1 className=' text-3xl opacity-40 font-bold'>Your cart is empty</h1>
                        <p className=' opacity-40'>Please add some products</p>
                    </div> :
                    selectedCard.map(card => {
                        return (
                            <div key={card.id}
                                className='mt-4 w-10/12 mx-auto'>
                                <div className="flex justify-between items-center border-2 border-primary rounded-lg p-3">
                                    <div className="flex gap-4">
                                        <img src={card.icon} alt="" className='size-16 rounded-lg border' />
                                        <div className="font-bold space-y-2">
                                            <h2>{card.name}</h2>
                                            <p>$ {card.price}</p>
                                        </div>
                                    </div>
                                    <button className='mr-10 hover:scale-105 transition-transform bg-gray-100 px-2 rounded-2xl font-bold text-red-400'
                                        onClick={() => handleDelete(card)}
                                    >Remove</button>
                                </div>
                            </div>
                        )
                    })
            }

            <div className="flex justify-between items-center p-5">
                <h1 className='pl-10'>Total Price:-</h1>
                <h1 className='pr-10 text-2xl font-bold'>$ {selectedCard.reduce((total, card) => total + card.price, 0)}</h1>
            </div>

            <div className="flex justify-center mt-5">
                <button
                    onClick={handlePurchaseAll}
                    className="btn text-white rounded-full w-8/12 bg-linear-[to_right,#4F39F6,#9514FA] hover:scale-105 transition-transform"
                >
                    Purchase All
                </button>
            </div>
        </div>
    );
};

export default SelectedCard;