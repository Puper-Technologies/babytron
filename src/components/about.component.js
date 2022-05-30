// import Image from 'next/image';


const About = ()=>{
    return <section className=" px-2 py-2 md:px-12 md:py-10 " id='about'>
        <div className="shadow-md rounded-2xl bg-slate-700">
            {/* TOP CENTER */}
            <div className="pt-7 text-gray-100 justify-center items-center">
                <h1 className="text-4xl">Why babytron??</h1>
                <div className="px-[5%] my-8">
                <h2 className="text-3x2">As we know that TRON has already gained around 8 billion doller market capital. So investing in TRON will not gave you profit too much but you have a golden chance to buy BABYTRON at very low rate to be a millionaire overnight 
BABYTRON has a very low tax same as TRON to buy and sell at 0.01-0.5% slippage on pancakeswap </h2>
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:grid md:grid-cols-2 md:px-[5%] md:pb-7">
            {/* left */}
            <div className='flex flex-col text-gray-100  space-y-4'>
                {/* <p>The world’s only enterprise blockchain solution for global payments</p> */}
                <div className="space-y-2 text-sm font-semibold px-4 py-4 flex flex-col items-start">
                    <p>Private sale price 0.00000000005 date</p>
                    <p>Presale 1 price 0.00000000012 date</p>
                    <p>Presale 2 price 0.00000000018 date</p>
                    <p>Listing  price  0.00000000035 date</p>
                </div>

                

                {/* <p className="text-gray-100">Welcome to Meta Web Inu (META WEB), a community-driven, equitably
launched, decentralized (metaverse, NFT & meme coin) on Binance Smart
Chain where we can create/buy or sold memes NFT. These memes
character can be auctioned & seen in metaverse world when we dives
into it. Later on, the total number of 100K cabbed plots will be created
& can be bough with (META WEB) coins. It aims to be the world’s
Largest NFT Metaverse coin. Meta Web Inu (META WEB) is largely
inspired by the success of meme coin Shiba Inu & NFT coin Decentraland(MANA), from that we started a project on it and it may kill both Shiba Inu and Decentraland(MANA) in 2022.</p>
                <p>Our project will mainly focus on 1.Providing platform for creating memes and sold it as NFTs. 2.Creating metaverse world where the memes avatars can be seen. 3.Creating plots for these avatars to live in like real world. 4.When all these land finally bought then it can be traded as real estate.</p> */}
            </div>

            {/* right */}
            <div className='flex flex-row mb-5 justify-center text-center text-gray-100 mt-3'>
                {/* <img className='z-0 object-cover'  src ="about.png" 
                /> */}
                BABYTRON will be listing on worlds top exchanges like Binance, FTX, Coinbase, Kraken, Kucoin, Gate.io, Huobi
                global, MEXC, Lbank, IndoEx and many more step by step
            </div>
            </div>
        </div>
    </section>
}

export default About;