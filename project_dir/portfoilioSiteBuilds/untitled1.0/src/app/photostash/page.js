import React from 'react'
import './globals.css'
export default function page() {
  return (
    <div>
        <header  style={{backgroundImage: 'url(/20170331_184527_Film3.jpg)'}}>
            <section className={'gap-4 h-full'}>
                <h1>Welcome to my photo stash</h1>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img src="/desertRats.jpg" height={350} width={350} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/cyperTanjiro.jpg" height={350} width={350} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/110895792_large_1494357679.jpg" height={350} width={350} alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="/gear.png" height={350} width={350} alt="Pizza" />
                    </div>
                </div>
                <h1>Here are some some of routes I have enjoyed and stories behind them, below.</h1>
            </section>
        </header>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="/desertRats.jpg" height={350} width={350} alt={'route'} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Desert Rats Be Damned</h1>
                        <h3 className={'text-lg font-bold py-6'}>5.7 YDS | S 4b UK</h3>
                        <h2 className={'text-2xl font-bold'}>Desciption</h2>
                        <p className="py-6">Short pocketed face protected by hand crack.</p>
                        <h2 className={'text-2xl font-bold'}>Location</h2>
                        <p className="py-6">Travel along the wall and around the corner from T-Rad. Enter the next cove. This route is on the opposite, west-facing wall. First route encountered in the Crack-a-Lackin' sector.</p>
                        <button className="btn btn-primary"><a href={'https://www.mountainproject.com/route/108178999/desert-rats-be-damned'}>View The Route On Mountain Project</a></button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/teamTrailer.jpg" height={350} width={350} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
