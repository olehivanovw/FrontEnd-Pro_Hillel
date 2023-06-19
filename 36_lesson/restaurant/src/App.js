import { Routes, Route } from "react-router-dom";
import { Layout, Menu, Typography } from 'antd';
import { menu } from "./menu";
import NotFound from "./routes/NotFound";
import OrderRoutes from "./routes/orders/OrderRoutes";
import TableRoutes from "./routes/tables/TableRoutes";
import WaiterRoutes from "./routes/waiters/WaiterRoutes";
import DishRoutes from "./routes/dishes/DishRoutes";
import './App.css';

function App() {
  return (
    <Layout className='wrapper'>
      <Layout.Header className='header'>
        <Menu mode="horizontal" items={menu} />
      </Layout.Header>
      <Layout.Content className='content'>
        <Routes>
          <Route path='/*' element={<OrderRoutes />} />
          <Route path='/tables/*' element={<TableRoutes />} />
          <Route path='/waiters/*' element={<WaiterRoutes />} />
          <Route path='/dishes/*' element={<DishRoutes />} />
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
