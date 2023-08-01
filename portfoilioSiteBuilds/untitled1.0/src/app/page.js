import { Indie_Flower } from 'next/font/google'

const indie = Indie_Flower({weight: '400', subsets: ['latin']})
export default function Home() {
  return (
    <div className={'bg-cover bg-center bg-no-repeat'} style={{backgroundImage: 'url(/cottage-core-trend-alert-1.png)'}}>
      <header>
          <section className="intro">
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

          </section>
      </header>
      <main>
          <section className="portfolio-web bg-primary" id="web-dev">
              <h1>view my portfolio</h1>
              <p>click to view all the websites, and personal projects</p>
              <button>
                  <a href="/webportfolio">view portfolio</a>
              </button>
          </section>
          <section className={'rock-climbing'} id={'climbing'}>
              <h1>My Tick List can be viewed: <a href="https://www.mountainproject.com/user/112227120/skyler-fullmer/ticks" id="climber">Here</a></h1>
              <h3>And below are a few routes I have really enjoyed.</h3>

          </section>
      </main>
    </div>
  )
}
