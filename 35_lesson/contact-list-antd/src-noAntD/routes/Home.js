import { Link } from "react-router-dom";

export default function Home () {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Culpa enim libero sequi.
        Accusantium eos iusto molestias necessitatibus optio quaerat quam reprehenderit similique unde voluptates!
        Autem error nostrum provident quae quia?
      </p>
      <Link to='/contact/create'>
        <button className='btn'>Add Contact</button>
      </Link>
      <Link to='/contact'>
        <button className='btn'>Show Contacts</button>
      </Link>
    </div>
  )
}