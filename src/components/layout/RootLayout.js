import { Layout, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: "Categories",
    key: "SubMenu",
    children: [
      {
        label: <Link href="/processors">Processor</Link>,
        key: "cpu",
      },
      {
        label: <Link href="/motherboards">Motherboard</Link>,
        key: "motherboard",
      },
      {
        label: <Link href="/rams">Ram</Link>,
        key: "ram",
      },
      {
        label: <Link href="/psus">Power Supply Unit</Link>,
        key: "psu",
      },
      {
        label: <Link href="/storages">Storage Device</Link>,
        key: "storage",
      },
      {
        label: <Link href="/monitors">Monitor</Link>,
        key: "monitor",
      },
    ],
  },
  {
    label: <Link href="/pc-build">Pc Build</Link>,
    key: "alipay",
  },
];

const RootLayout = ({ children }) => {
  const [current, setCurrent] = useState("processor");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ fontWeight: "300", fontSize: "30px" }}>
          <Link href="/">PC Shop</Link>
        </div>
        <Menu
          mode="horizontal"
          onClick={onClick}
          selectedKeys={[current]}
          items={items}
          style={{ fontWeight: "600", fontSize: "16px" }}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px 50px 50px",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: "#fff",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#fff",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
