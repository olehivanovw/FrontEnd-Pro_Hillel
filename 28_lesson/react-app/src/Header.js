import logo from './img/flaticon.svg'

export default function Header() {
  return (
    <header className='App_header'>
      <img src={logo} alt='logo' className='App_header-icon'/>
      <form className='App_header_form'>
        <label htmlFor='search'>
          <input className='App_header_form-input' type='text' id='search' placeholder='Search'/>
        </label>
        <span>Category</span>
        <span>Account</span>
      </form>
    </header>
  )
}