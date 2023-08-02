import React from 'react'


export default function page() {
  return (
    <div>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
            <p className="mb-5">If You have A idea, or like Colaborate. You can Email at alipinerevitservices@gmail.com</p>
            <p>Come Say Hi: </p>
            <button className="btn btn-primary"><a href={'https://www.linkedin.com/in/skyler-fullmer-742145221/'}>Here</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}
