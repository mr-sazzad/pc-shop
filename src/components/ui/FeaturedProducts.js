import FeaturedProductsCard from "./FeaturedProductsCard";

const FeaturedProducts = ({ products }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "300" }}>
        Featured products
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <FeaturedProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
