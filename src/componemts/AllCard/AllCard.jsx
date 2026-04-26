import { toast } from 'react-toastify';

const SingleCard = ({ card, setSelectedCard, selectedCard }) => {
    const isAlreadyInCart = selectedCard.find(item => item.id === card.id);

    const getBadgeColor = (tag) => {
        const lowerTag = tag?.toLowerCase() || '';
        if (lowerTag === 'new') return 'bg-green-100 text-green-700 border-green-200';
        if (lowerTag === 'popular') return 'bg-blue-100 text-blue-700 border-blue-200';
        return 'bg-amber-100 text-amber-700 border-amber-200';
    };

    const handleAddToCart = () => {
        if (isAlreadyInCart) {
            toast.error(`${card.name} is already in your cart!`);
            return;
        }
        setSelectedCard([...selectedCard, card]);
        toast.success(`${card.name} added to cart!`);
    };

    return (
        <div className="card shadow-md border border-gray-100 bg-base-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
            <div className="card-body p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <img src={card.icon} alt={card.name} className="size-14 rounded-xl shadow-sm border p-1 object-contain" />
                    <span className={`badge border text-[10px] font-bold px-3 py-3 rounded-lg ${getBadgeColor(card.tagType)}`}>
                        {card.tagType}
                    </span>
                </div>

                <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{card.name}</h2>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{card.description}</p>
                    <div className="mb-4">
                        <span className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
                            ${card.price}
                        </span>
                        <span className="text-gray-400 text-xs ml-1">/{card.period}</span>
                    </div>
                </div>

                <ul className="space-y-2 mb-6">
                    {card.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="size-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleAddToCart}
                    disabled={isAlreadyInCart}
                    className={`btn w-full rounded-full border-none font-bold transition-all py-3 ${isAlreadyInCart ? 'bg-gray-200 text-gray-400' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-[1.02]'}`}
                >
                    {isAlreadyInCart ? 'Already in Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

const AllCard = ({ CardData, setSelectedCard, selectedCard }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 md:w-10/12 mx-auto my-12'>
            {CardData.map((card) => (
                <SingleCard key={card.id} card={card} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
            ))}
        </div>
    );
};

export default AllCard;