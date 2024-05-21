import { NavLink, Outlet }  from 'react-router-dom'

export default function NavLayout () {
  return (
    <div>
      <header> 
        <h1 className='handtext'>Go-Fish</h1>
      </header>
      <div>
        <nav >
          <button className='dropdown'><NavLink to="/">Player Select</NavLink></button>
          <button className='dropdown'><NavLink to="/game">Game</NavLink></button>
          <button className='dropdown'><NavLink to="/scorecard">Score Table</NavLink></button>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
