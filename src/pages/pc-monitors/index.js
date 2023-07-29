import RootLayout from "@/components/layout/RootLayout";
import PcCategoryCard from "@/components/ui/Pc/pcCategories";
import { Layout } from "antd";

const PcMonitorsPage = ({ monitors }) => {
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
      {monitors?.data?.map((monitor) => (
        <PcCategoryCard key={monitor?._id} Category={monitor} />
      ))}
    </div>
  );
};

export default PcMonitorsPage;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/pc-builder/pc-monitors"
  );
  const monitors = await res.json();
  return { props: { monitors } };
};

PcMonitorsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
