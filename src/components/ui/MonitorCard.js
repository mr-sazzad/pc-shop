/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

const MonitorCard = ({ monitor }) => {
  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            src={monitor?.image}
            alt=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        actions={[
          <Link href={`monitors/${monitor._id}`}>See Details 🚀...</Link>,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              style={{ backgroundColor: "#c3f9ac" }}
              icon={<UserOutlined />}
            />
          }
          title={monitor?.product_name}
          description={monitor?.category}
        />
        <p style={{ paddingTop: "10px", color: "gray" }}>
          {" "}
          Price : ${monitor?.price ? monitor?.price : 20}
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
            {monitor?.status}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ⭐ {monitor?.rating ? monitor?.rating : 4.9}
          </p>
        </div>
      </Card>
    </div>
  );
};
export default MonitorCard;
