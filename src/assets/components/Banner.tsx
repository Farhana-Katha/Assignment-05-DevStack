import Logo2 from '../banner-stack.png';

const Banner = () => {
    return (
        <header className='w-full items-center'>
            <div className='max-w-7xl mx-auto lg:px-8 flex  items-start mt-8'>
            <div >
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]'>Build Your Ideal <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via bg-purple-600 to-indigo-600"> Development Stack</span>
                </h1>
                <p className='mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed' >Explore frontend,backend,database,and tooling options,<br />compare them side by side,
                    and put together the stack that fits your <br />next project.</p>
                    <div className='flex flex-wrap items-center gap-4 mt-4'>
                <button className="btn btn-secondary text-shadow-transparent bg-gradient-to-r from-pink-500 via bg-purple-600 to-indigo-600">Explore Technologies</button>
                <button className="btn btn-active">Learn More</button>
                </div>
            </div>
            <div className='ml-auto'>
                <img src={Logo2} alt=""  />
            </div>
            </div>
        </header>
    );
};

export default Banner;