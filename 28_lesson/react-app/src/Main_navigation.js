export default function Main_navigation() {
  return (
    <nav className='wrapper_nav'>
      <ul className='wrapper_nav_list'>
        <Nav_item>Home</Nav_item>
        <Nav_item>Game</Nav_item>
        <Nav_item>Learn</Nav_item>
        <Nav_item>Mobile</Nav_item>
        <Nav_item>Book</Nav_item>
        <Nav_item>Film</Nav_item>
        <Nav_item>Music</Nav_item>
        <Nav_item>Forum</Nav_item>
        <Nav_item>Market</Nav_item>
      </ul>
    </nav>
  )
}

function Nav_item({ children }) {
  return <li className='wrapper_nav_list-item'>{children}</li>
}