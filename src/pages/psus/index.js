import RootLayout from "@/components/layout/RootLayout";
import PowerSupplyCard from "@/components/ui/PsusCard";
import { Layout } from "antd";

const PowerSupplyUnit = ({ processors }) => {
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
      {processors?.data?.map((processor) => (
        <PowerSupplyCard key={processor?._id} processor={processor} />
      ))}
    </div>
  );
};

export default PowerSupplyUnit;

export const getStaticProps = async () => {
  const res = await fetch("https://backend-six-topaz.vercel.app/api/v1/psus");
  const processors = await res.json();
  return { props: { processors } };
};

PowerSupplyUnit.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
