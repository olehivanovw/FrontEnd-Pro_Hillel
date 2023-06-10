import { NavLink } from "react-router-dom";
import { CoffeeOutlined, HomeOutlined, ShopOutlined, TeamOutlined } from "@ant-design/icons";

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
    icon: <TeamOutlined />,
  },
  {
    label: <NavLink to='/dishes'>Dishes</NavLink>,
    key: 'dishes',
    icon: <CoffeeOutlined />,
  },
]