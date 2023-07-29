import RootLayout from "@/components/layout/RootLayout";
import { Col, Divider, Layout, Row } from "antd";

const MotherBoardDetails = ({ category }) => {
  return (
    <div>
      <div>
        <Row>
          <Col
            xs={{
              span: 10,
              offset: 1,
            }}
            lg={{
              span: 8,
              offset: 2,
            }}
          >
            <img
              src={category?.data?.image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                objectPosition: "center",
              }}
            />
          </Col>
          <Col
            xs={{
              span: 12,
              offset: 1,
            }}
            lg={{
              span: 12,
              offset: 2,
            }}
            style={{ fontWeight: "300" }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: "300" }}>
              {category?.data?.product_name}
            </h2>
            <Divider orientation="left">
              <p style={{ fontWeight: "300" }}>specification</p>
            </Divider>
            <p style={{ fontSize: "18px", lineHeight: "30px" }}>
              Category: {category?.data?.category}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>
              Status: {category?.data?.status}
            </p>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>
              Price: {category?.data?.price} 💰
            </p>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>
              Description: {category?.data?.description}
            </p>
            <div>
              <Divider orientation="left">
                <p style={{ fontWeight: "300" }}>Key Features</p>
              </Divider>
              <p>
                Brand: {category?.data?.key_features.Brand} , Model:{" "}
                {category?.data?.key_features.Model} , Specification:{" "}
                {category?.data?.key_features.Specification} , Socket:{" "}
                {category?.data?.key_features.Socket} , Clock_Speed:{" "}
                {category?.data?.key_features.Clock_Speed} , Cache:{" "}
                {category?.data?.key_features.Cache} ,TDP:
                {category?.data?.key_features.TDP},
              </p>
            </div>
            <Divider orientation="left">
              <p style={{ fontWeight: "300" }}>Ratings</p>
            </Divider>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>
              Individual Rating: {category?.data?.individual_rating} ⭐
            </p>
            <p style={{ fontSize: "16px", lineHeight: "30px" }}>
              Average Rating: {category?.data?.average_rating} ⭐
            </p>
          </Col>
        </Row>
      </div>
      <Divider orientation="center">
        <p style={{ fontWeight: "300" }}>Comments Part</p>
      </Divider>
      <div>
        <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "300" }}>
          Reviews
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginTop: "30px",
          }}
        >
          {category?.data?.reviews?.map((review) => (
            <div
              key={review.user}
              style={{
                border: "1px solid gray",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "5px 20px",
                }}
              >
                <p style={{ fontSize: "18px", fontWeight: "300" }}>
                  👨🏾‍💻 {review?.user}
                </p>
                <p style={{ fontSize: "18px", fontWeight: "300" }}>
                  ⭐ {review.rating}
                </p>
              </div>
              <p style={{ fontSize: "18px", fontWeight: "300" }}>
                💭 {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotherBoardDetails;

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/motherboards"
  );
  const categories = await res.json();

  const paths = categories?.data?.map((category) => ({
    params: { motherboardId: category._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://backend-six-topaz.vercel.app/api/v1/motherboards/${params.motherboardId}`
  );
  const data = await res.json();
  return { props: { category: data } };
};

MotherBoardDetails.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
