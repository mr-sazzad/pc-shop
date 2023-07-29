/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import RootLayout from "@/components/layout/RootLayout";
import { resetCart } from "@/redux/features/builderSlice";
import { Layout } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const PcBuilder = ({ products }) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to order!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please order!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetCart());
        Swal.fire("Success!", "Your order has been pleased", "success");
      }
    });
  };

  return (
    <div>
      <div style={{ padding: "50px 0" }}>
        {products?.data?.map((product) => (
          <div
            key={product._id}
            style={{
              padding: "10px",
              border: "1px solid lightgray",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={product?.image}
                alt=""
                style={{
                  height: "70px",
                  width: "100px",
                  objectFit: "cover",
                  borderRadius: "5px 0px 0px 5px",
                }}
              />

              <p style={{ fontSize: "18px", fontWeight: "300" }}>
                {product?.category}
              </p>
            </div>
            <div>
              <Link
                href={product?.pcLink}
                style={{
                  padding: "20px 20px",
                  color: "black",
                  borderRadius: "0px 5px 5px 0px",
                  border: "1px solid gray",
                }}
              >
                Please Chose
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "300px",
          border: "1px solid gray",
          marginLeft: "auto",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ textAlign: "center", fontWeight: "300", padding: "10px" }}>
          Cart
        </h1>
        {cartProducts?.map((product) => (
          <div
            key={product?._id}
            style={{
              borderTop: "1px solid gray",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 10px",
            }}
          >
            <img
              src={product?.image}
              alt="productImage"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <p style={{ fontWeight: "300", color: "gray" }}>
              {product?.product_name}
            </p>
          </div>
        ))}
        <button
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            background: "transparent",
            borderTop: "1px solid gray",
            cursor: "pointer",
          }}
          disabled={cartProducts.length < 5 ? true : false}
          onClick={handleCart}
        >
          Please Order
        </button>
      </div>
    </div>
  );
};
export default PcBuilder;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/featured"
  );
  const products = await res.json();
  return { props: { products } };
};

PcBuilder.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
