import { NavLink, Outlet }  from 'react-router-dom'

export default function NavLayout () {
  return (
    <div>
       <header> 
      <nav >
        <h1 className='handtext'>Go-Fish</h1>
        <button className='dropdown'><NavLink to="/">Player Select</NavLink></button>
        <button className='dropdown'><NavLink to="/game">Game</NavLink></button>
        <button className='dropdown'><NavLink to="/scorecard">Score Table</NavLink></button>
      </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
