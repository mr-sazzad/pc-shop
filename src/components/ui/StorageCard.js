/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

const StorageCard = ({ processor }) => {
  console.log(processor);
  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            src={processor?.image}
            alt=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        actions={[
          <Link href={`storages/${processor._id}`}>See Details 🚀...</Link>,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              style={{ backgroundColor: "#c3f9ac" }}
              icon={<UserOutlined />}
            />
          }
          title={processor?.product_name}
          description={processor?.category}
        />
        <p style={{ paddingTop: "10px", color: "gray" }}>
          {" "}
          Price : ${processor.price ? processor?.price : 50}
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
            {processor?.status}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ⭐ {processor?.rating ? processor?.rating : 4.5}
          </p>
        </div>
      </Card>
    </div>
  );
};
export default StorageCard;
