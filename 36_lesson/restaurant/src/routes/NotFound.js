import { Typography } from "antd";

export default function NotFound () {
  const { Title } = Typography;
  return (
    <div>
      <Title type="danger">Page Not Found</Title>
      <Title type="danger">404</Title>
    </div>
  )
}