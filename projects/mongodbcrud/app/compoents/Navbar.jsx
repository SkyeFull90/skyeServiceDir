import React from 'react'

export default function Navbar() {
  return (
      <div className="navbar bg-slate-400 dark:bg-slate-800 px-8 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Amine Conventions</a>
              <ul className="p-2">
                <li><a>Conventions by Category</a></li>
                <li><a>All Anime Conventions</a></li>
              </ul>
            </li>
            <li><a>Add Convention Event</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className={'text-indigo-800 dark:text-white'} href='/'>Home</a></li>
          <li tabIndex={0}>
            <details className={'text-indigo-800 dark:text-white'}>
              <summary>Topic</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a className={'text-indigo-800 dark:text-white'} href='#'>Add Topic</a></li>
        </ul>
      </div>
    </div>
  )
}
