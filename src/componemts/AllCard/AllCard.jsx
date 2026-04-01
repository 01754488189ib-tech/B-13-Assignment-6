import { toast } from 'react-toastify';

const SingleCard = ({ card, setSelectedCard, selectedCard }) => {
    const isAlreadyInCart = selectedCard.find(item => item.id === card.id);

    const getBadgeColor = (tag) => {
        const lowerTag = tag?.toLowerCase() || '';
        if (lowerTag === 'new') return 'bg-green-100 text-green-700 border-green-200';
        if (lowerTag === 'popular') return 'bg-blue-100 text-blue-700 border-blue-200';
        if (lowerTag === 'best seller') return 'bg-orange-100 text-orange-700 border-orange-200';
        return 'bg-amber-100 text-amber-700 border-amber-200';
    };

    const handleChooseCard = () => {
        if (isAlreadyInCart) {
            toast.warn(`${card.name} is already in your cart!`, { position: "top-center" });
            return;
        }
        setSelectedCard([...selectedCard, card]);
        toast.success(`${card.name} Added to Cart!`, { position: "top-center" });
    };

    return (
        <div className="card shadow-md border border-gray-100 bg-base-100 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="card-body p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <img src={card.icon} alt={card.name} className="w-14 h-14 rounded-xl shadow-sm object-cover" />
                    <span className={`badge border text-[10px] font-bold px-3 py-3 rounded-lg ${getBadgeColor(card.tagType)}`}>
                        {card.tagType}
                    </span>
                </div>

                <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-800">{card.name}</h2>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{card.description}</p>
                    <div className="mt-4">
                        <span className='text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                            ${card.price}
                        </span>
                        <span className="text-gray-400 text-xs ml-1">/{card.period}</span>
                    </div>
                </div>

                <ul className="my-6 space-y-2 flex-grow">
                    {card.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#4F39F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleChooseCard}
                    className={`btn btn-block rounded-full border-none font-bold transition-all ${isAlreadyInCart ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:-translate hover:shadow-xl shadow-md'}`}
                >
                    {isAlreadyInCart ? 'In Cart' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
};

const AllCard = ({ CardData, setSelectedCard, selectedCard }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-10/12 mx-auto gap-8 mb-20'>
            {CardData.map((card) => (
                <SingleCard key={card.id} card={card} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
            ))}
        </div>
    );
};

export default AllCard;