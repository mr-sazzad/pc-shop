/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";

const { Meta } = Card;

const MotherBoardCard = ({ motherBoard }) => {
  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            src={motherBoard?.image}
            alt=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        actions={[
          <Link href={`motherboards/${motherBoard._id}`}>
            See Details 🚀...
          </Link>,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              style={{ backgroundColor: "#c3f9ac" }}
              icon={<UserOutlined />}
            />
          }
          title={motherBoard?.product_name}
          description={motherBoard?.category}
        />
        <p style={{ paddingTop: "10px", color: "gray" }}>
          {" "}
          Price : {motherBoard?.price} $
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
            {motherBoard?.status}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ⭐ {motherBoard?.rating}
          </p>
        </div>
      </Card>
    </div>
  );
};
export default MotherBoardCard;
