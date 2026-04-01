import packageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';
import userIcon from '../../assets/user.png';

const StepSection = () => {
    return (
        <div className="bg-gray-200 mt-10 py-10">
            <div className='flex flex-col items-center justify-center p-6 md:p-10 space-y-4 md:space-y-6 mt-5 text-center'>
                <h2 className='text-3xl md:text-5xl font-bold'>Get Started in 3 Steps</h2>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-10 max-w-7xl mx-auto">

                <div className="card hover:scale-105 transition-transform bg-base-100 w-full max-w-sm mx-auto shadow-sm">
                    <h2 className="card-title flex items-end justify-end mt-8 mr-8">
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full size-10 flex items-center justify-center font-bold text-white'>01</span>
                    </h2>
                    <figure className="px-10 pt-10">
                        <div className="bg-purple-200 p-4 rounded-full">
                            <img
                                src={userIcon}
                                alt="User Icon"
                                className='size-15' />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p className='mb-8'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className="card hover:scale-105 transition-transform bg-base-100 w-full max-w-sm mx-auto shadow-sm">
                    <h2 className="card-title flex items-end justify-end mt-8 mr-8">
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full size-10 flex items-center justify-center font-bold text-white'>02</span>
                    </h2>
                    <figure className="px-10 pt-10">
                        <div className="bg-purple-200 p-4 rounded-full">
                            <img
                                src={packageIcon}
                                alt="PackageIcon"
                                className='size-15' />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Choose Products</h2>
                        <p className='mb-8'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                <div className="card hover:scale-105 transition-transform bg-base-100 w-full max-w-sm mx-auto shadow-sm">
                    <h2 className="card-title flex items-end justify-end mt-8 mr-8">
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 rounded-full size-10 flex items-center justify-center font-bold text-white'>03</span>
                    </h2>
                    <figure className="px-10 pt-10">
                        <div className="bg-purple-200 p-4 rounded-full">
                            <img
                                src={rocketIcon}
                                alt="RocketIcon"
                                className='size-15' />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Start Creating</h2>
                        <p className='mb-8'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StepSection;