import RootLayout from "@/components/layout/RootLayout";
import MotherBoardCard from "@/components/ui/MotherBoardCard";
import { Layout } from "antd";

const MotherBoardPage = ({ categories }) => {
  return (
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
      {categories?.data?.map((category) => (
        <MotherBoardCard key={category?._id} motherBoard={category} />
      ))}
    </div>
  );
};

export default MotherBoardPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/motherboards"
  );
  const categories = await res.json();
  return { props: { categories } };
};

MotherBoardPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
