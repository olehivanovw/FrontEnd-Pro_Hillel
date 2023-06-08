import { NavLink } from "react-router-dom";
import { CoffeeOutlined, HomeOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons";

export const menu = [
  {
    label: <NavLink to='/'>Orders</NavLink>,
    key: 'orders',
    icon: <HomeOutlined />,
  },
  {
    label: <NavLink to='/tables'>Tables</NavLink>,
    key: 'tables',
    icon: <ShopOutlined />,
  },
  {
    label: <NavLink to='/waiters'>Waiters</NavLink>,
    key: 'waiters',
    icon: <UserOutlined />,
  },
  {
    label: <NavLink to='/dishes'>Dishes</NavLink>,
    key: 'dishes',
    icon: <CoffeeOutlined />,
  },
]