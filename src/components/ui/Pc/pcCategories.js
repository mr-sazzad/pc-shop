/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { addToCart } from "@/redux/features/builderSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const { Meta } = Card;

const PcCategoryCard = ({ Category }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (product) => {
    dispatch(addToCart(product));
    router.push("/pc-build");
  };

  return (
    <div>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            src={Category?.image}
            alt=""
            style={{ height: "200px", objectFit: "cover" }}
          />
        }
        actions={[
          <button
            onClick={() => handleClick(Category)}
            style={{
              height: "100%",
              width: "100%",
              padding: "10px",
              cursor: "pointer",
              border: "none",
              backgroundColor: "transparent",
              fontWeight: "300",
            }}
          >
            Select 🛒
          </button>,
        ]}
      >
        <Meta
          avatar={
            <Avatar
              style={{ backgroundColor: "#c3f9ac" }}
              icon={<UserOutlined />}
            />
          }
          title={Category?.product_name}
          description={Category?.category}
        />
        <p style={{ paddingTop: "10px", color: "gray" }}>
          Price : ${Category?.price ? Category?.price : 20}
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
            {Category?.status}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ⭐ {Category?.rating ? Category?.rating : 4.9}
          </p>
        </div>
      </Card>
    </div>
  );
};
export default PcCategoryCard;
