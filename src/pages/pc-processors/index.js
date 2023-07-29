import RootLayout from "@/components/layout/RootLayout";
import PcCategoryCard from "@/components/ui/Pc/pcCategories";
import { Layout } from "antd";

const PcProcessor = ({ categories }) => {
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
        <PcCategoryCard key={category?._id} Category={category} />
      ))}
    </div>
  );
};

export default PcProcessor;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/pc-builder/pc-processors"
  );
  const categories = await res.json();
  return { props: { categories } };
};

PcProcessor.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
