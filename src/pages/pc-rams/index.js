import RootLayout from "@/components/layout/RootLayout";
import PcCategoryCard from "@/components/ui/Pc/pcCategories";
import { Layout } from "antd";

const PcRam = ({ categories }) => {
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
      {categories?.data?.map((monitor) => (
        <PcCategoryCard key={monitor?._id} Category={monitor} />
      ))}
    </div>
  );
};

export default PcRam;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/pc-builder/pc-rams"
  );
  const categories = await res.json();
  return { props: { categories } };
};

PcRam.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
