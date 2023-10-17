import { NavLink, Outlet }  from 'react-router-dom'

export default function NavLayout () {
  return (
    <div>
      <header>
      <nav>
        <h1>Go-Fish</h1>
        <NavLink to="/">Player Select</NavLink>
        <NavLink to="/game">Game</NavLink>
        <NavLink to="/scorecard">Score Table</NavLink>
      </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
