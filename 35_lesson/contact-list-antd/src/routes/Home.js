import { Link } from "react-router-dom";
import { Button, Space, Typography } from "antd";

export default function Home () {
  const { Title, Text } = Typography;
  return (
    <div>
      <Title>Home</Title>
      <Text type="secondary">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Culpa enim libero sequi.
          Accusantium eos iusto molestias necessitatibus optio quaerat quam reprehenderit similique unde voluptates!
          Autem error nostrum provident quae quia?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At illo illum ipsa iste molestiae necessitatibus tempore voluptatibus!
          Adipisci culpa cupiditate eligendi et excepturi explicabo fuga impedit molestias, necessitatibus nemo, omnis quae quos repudiandae sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Culpa enim libero sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium eos iusto molestias necessitatibus optio quaerat quam reprehenderit similique unde voluptates!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Culpa enim libero sequi.
          Accusantium eos iusto molestias necessitatibus optio quaerat quam reprehenderit similique unde voluptates!
          Autem error nostrum provident quae quia?
        </p>
      </Text>
      <Space wrap className='btn-container'>
        <Button type="primary">
          <Link to='/contact/create'>Add Contact</Link>
        </Button>
        <Button type="primary">
          <Link to='/contact'>Show Contacts</Link>
        </Button>
      </Space>
    </div>
  )
}