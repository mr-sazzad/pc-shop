/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

const FeaturedProductsCard = ({ product }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        src={product?.image}
        alt=""
        style={{ height: "200px", objectFit: "cover" }}
      />
    }
    actions={[<Link href={product.link}>See All Products 🚀...</Link>]}
  >
    <Meta
      avatar={
        <Avatar
          style={{ backgroundColor: "#c3f9ac" }}
          icon={<UserOutlined />}
        />
      }
      title={product?.product_name}
      description={product?.category}
    />
    <p style={{ paddingTop: "10px", color: "gray" }}>
      {" "}
      Price : {product?.price} $
    </p>
    <div
      style={{
        paddingTop: "10px",
        color: "gray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p
        style={{
          backgroundColor: "#AABEEA",
          padding: "3px 8px",
          borderRadius: "25px",
        }}
      >
        {product?.status}
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        ⭐ {product?.rating}
      </p>
    </div>
  </Card>
);
export default FeaturedProductsCard;
