import Logo2 from '../banner-stack.png';

const Banner = () => {
    return (
        <header className='flex justify-between max-auto'>
            <div className='flex flex-col items-start'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]'>Build Your Ideal <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via bg-purple-600 to-indigo-600"> Development Stack</span>
                </h1>
                <p className='mt-6 text-base sm:text-lg text-slate-600 font-normal leading-relaxed' >Explore frontend,backend,database,and tooling options,<br />compare them side by side,
                    and put together the stack that fits your <br />next project.</p>
                    <div className='flex flex-wrap items-center gap-4 p-2'>
                <button className="btn btn-secondary">Explore Technologies</button>
                <button className="btn btn-active">Learn More</button>
                </div>
            </div>
            <div>
                <img src={Logo2} alt="" />
            </div>
        </header>
    );
};

export default Banner;