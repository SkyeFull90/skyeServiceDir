import { Indie_Flower } from 'next/font/google'

const indie = Indie_Flower({weight: '400', subsets: ['latin']})
export default function Home() {
  return (
    <div className={'bg-cover bg-center bg-no-repeat'} style={{backgroundImage: 'url(/cottage-core-trend-alert-1.png)'}}>
      <header>
          <section className="intro gap-2">
              <h1 className="about-me text-5xl font-bold">Skyler Fullmer</h1>
              <div className={'breadcrumbs'}>
                  <ul>
                      <li><a href="#climbing" className="climber">Climber </a></li>
                      <li><a href="#web-dev" className="developer">Developer </a></li>
                      <li><a href="#youtube" className="producer">Video Producer </a></li>
                  </ul>
              </div>

              <div className={`${indie.className}`}>
                  <p className="about-me-p">Passionate about Rock Climbing, software development, gaming, Cosplay, and Public land access for those in the Rock Climbing Space.</p>
                  <p className="about-me-p">Inspired by the mountains and cliffs I tend to explore. As well as gaming, film, tv, and anime. </p>
              </div>
            <img src={'/IMG_20211105_223720_412.jpg'} height={250} width={250}/>
          </section>
      </header>
      <main>
          <section className="portfolio-web" id="web-dev">
              <h1>view my portfolio</h1>
              <p>click to view all the websites, and personal projects</p>
              <button className={'btn btn-outline btn-glass'}>
                  <a href="/webportfolio">view portfolio</a>
              </button>
          </section>
          <section className={'rock-climbing'} id={'climbing'}>
              <h1>My Tick List can be viewed: <a href="https://www.mountainproject.com/user/112227120/skyler-fullmer/ticks" id="climber">Here</a></h1>
              <h3>And below are a few routes I have really enjoyed.</h3>
              <section className={'tick-list'}>
                  <section>
                      <div className="carousel carousel-center rounded-box">
                          <div className="carousel-item">
                              <img src="/desertRats.jpg" height={250} width={250}  />
                          </div>
                          <div className="carousel-item ">
                              <img src="/teamTrailer.jpg" height={250} width={250}  />
                          </div>
                          <div className="carousel-item ">
                              <img src="/110895792_large_1494357679.jpg" height={250} width={250}  />
                          </div>
                      </div>
                  </section>
                 <section>
                     <h2><a href="https://www.mountainproject.com/route/108178999/desert-rats-be-damned"> Desert Rats Be Damned</a></h2>
                     <h2><a href="https://www.mountainproject.com/route/107695410/team-trailer">Team Trailer</a></h2>
                     <h2><a href="https://www.mountainproject.com/route/105841378/annie-git-yer-drill">Annie Git Yer Drill </a></h2>
                 </section>
              </section>
              <h3>And click the button to view more info about my favorite routes</h3>
              <button className={'btn glass btn-outline'}><a href="/photostash">The Stash</a></button>
          </section>
          <section className="portfolio-video" id="youtube">
              <h1>view the videos I have produced. some only with a samsung a51 5g</h1>
              <h3>The Climb Vlog: A vlog about climbing, Life, and the Climbing Life</h3>
              <p>click to view my YouTube</p>
              <button>
                  <a href="https://www.youtube.com/@QuirkyGek/featured">Watch The Climb Vlog</a>
              </button>
              <span>I also Stream on twitch: No Man's Sky, Halo Infinite, Halo the Masterchief Collection, and Warframe</span>
              <button><a href="https://twitch.tv/thequirkygek">Join in on the space chaos</a></button>
          </section>
      </main>
    </div>
  )
}
