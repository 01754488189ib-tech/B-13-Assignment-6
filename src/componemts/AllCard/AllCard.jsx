import { toast } from 'react-toastify';

const SingleCard = ({ card, setSelectedCard, selectedCard }) => {
    const isAlreadyInCart = selectedCard.find(item => item.id === card.id);

    const getBadgeColor = (tag) => {
        const lowerTag = tag.toLowerCase();
        if (lowerTag === 'new') return 'bg-green-100 text-green-700 border-green-200';
        if (lowerTag === 'popular') return 'bg-blue-100 text-blue-700 border-blue-200';
        if (lowerTag === 'best seller') return 'bg-orange-100 text-orange-700 border-orange-200';
        return 'bg-amber-100 text-amber-700 border-amber-200'; // Default (Yellow)
    };

    const handleChooseCard = () => {
        if (isAlreadyInCart) {
            toast.error(`${card.name} is already in your cart`, {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }
        setSelectedCard([...selectedCard, card]);
        toast.success(`${card.name} Selected!`, {
            position: "top-center",
            autoClose: 3000,
        });
    }

    return (
        <div className="card shadow-lg border-t-4 border-primary bg-base-100 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
            <div className="card-body flex flex-col flex-grow">
                <div className="flex justify-between items-start">
                    <img src={card.icon} alt={card.name} className="size-16 rounded-lg shadow-lg p-1" />

                    <span className={`badge border text-[10px] font-bold px-2 py-3 rounded-md ${getBadgeColor(card.tagType)}`}>
                        {card.tagType}
                    </span>
                </div>

                <div className="flex-grow">
                    <h2 className="text-lg font-bold truncate mt-3 text-gray-800">{card.name}</h2>
                    <h3 className="text-gray-500 line-clamp-2 text-xs mt-1">{card.description}</h3>
                    <h2 className="mt-2">
                        <span className='text-xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                            ${card.price}
                        </span>
                        <span className="text-gray-400 text-[10px]">/{card.period}</span>
                    </h2>
                </div>

                <ul className="mt-4 flex flex-col gap-1.5 text-[11px] text-gray-600">
                    {card.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5 me-2 text-[#4F39F6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-6">
                    <button
                        onClick={handleChooseCard}
                        className={`btn w-full rounded-full border-none font-bold transition-all active:scale-95 shadow-md
                        ${isAlreadyInCart
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-[#4F39F6] hover:scale-105 transition-transform to-[#9514FA] text-white hover:opacity-90'}`}
                    >
                        {isAlreadyInCart ? 'Already Selected' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const AllCard = ({ CardData, setSelectedCard, selectedCard }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-10/12 mx-auto gap-6 mb-20'>
            {CardData.map((card) => (
                <SingleCard key={card.id} card={card} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
            ))}
        </div>
    );
};

export default AllCard;