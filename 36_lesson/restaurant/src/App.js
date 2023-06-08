import { Routes, Route } from "react-router-dom";
import { Layout, Menu, Typography } from 'antd';
import NotFound from "./routes/NotFound";
import Order from "./routes/orders/Order";
import TableRoutes from "./routes/tables/TableRoutes";
import Dish from "./routes/dishes/Dish";
import Waiter from "./routes/waiters/Waiter";
import { menu } from "./menu";
import './App.css';

function App() {
  return (
    <Layout>
      <Layout.Header className='header'>
        <Menu mode="horizontal" items={menu} />
      </Layout.Header>
      <Layout.Content className='content'>
        <Routes>
          <Route path='/' element={<Order />} />
          <Route path='/tables/*' element={<TableRoutes />} />
          <Route path='/waiters/*' element={<Waiter />} />
          <Route path='/dishes/*' element={<Dish />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout.Content>
      <Layout.Footer className='footer'>
        <Typography.Text disabled>
          Ant Design ©2023 Created by Ant UED
        </Typography.Text>
      </Layout.Footer>
    </Layout>
  );
}

export default App;
