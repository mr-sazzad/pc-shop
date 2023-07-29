import RootLayout from "@/components/layout/RootLayout";
import StorageCard from "@/components/ui/StorageCard";
import { Layout } from "antd";

const StoragePage = ({ processors }) => {
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
        <StorageCard key={processor?._id} processor={processor} />
      ))}
    </div>
  );
};

export default StoragePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/storages"
  );
  const processors = await res.json();
  return { props: { processors } };
};

StoragePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
