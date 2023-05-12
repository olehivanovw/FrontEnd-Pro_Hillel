export default function MainNavigation() {
  return (
    <nav className='wrapper_nav'>
      <ul className='wrapper_nav_list'>
        <NavItem>Home</NavItem>
        <NavItem>Game</NavItem>
        <NavItem>Learn</NavItem>
        <NavItem>Mobile</NavItem>
        <NavItem>Book</NavItem>
        <NavItem>Film</NavItem>
        <NavItem>Music</NavItem>
        <NavItem>Forum</NavItem>
        <NavItem>Market</NavItem>
      </ul>
    </nav>
  )
}

function NavItem({ children }) {
  return <li className='wrapper_nav_list-item'>{children}</li>
}