import Image from 'next/image';


export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <a href={'/'}>Home</a>
              </li>
              <li>
                  <a href={'#'}> Events</a>
              </li>
              <li>
                  <a href={'/about-us'}> About us</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events By 3: Anime Conventions</p>
      </div>
    </header>
  );
};
