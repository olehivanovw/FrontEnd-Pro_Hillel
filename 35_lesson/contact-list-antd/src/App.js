import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import ContactRoutes from "./routes/contacts/ContactRoutes";
import { Layout, Menu, Typography } from 'antd';
import { HomeOutlined, TeamOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const { Header, Content, Footer } = Layout;
  const { Text } = Typography;
  const items = [
    {
      label: <NavLink to='/'>Home</NavLink>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <NavLink to='/contact'>Contact List</NavLink>,
      key: 'contact-list',
      icon: <TeamOutlined />,
    },
  ]

  return (
    <Layout>
      <Header className='header'>
        <Menu mode="horizontal" items={items} />
      </Header>
      <Content className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact/*' element={<ContactRoutes />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Content>
      <Footer className='footer'>
        <Text disabled>
          Ant Design ©2023 Created by Ant UED
        </Text>
      </Footer>
    </Layout>
  );
}

export default App;
