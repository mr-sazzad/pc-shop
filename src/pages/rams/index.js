import RootLayout from "@/components/layout/RootLayout";
import RamsCard from "@/components/ui/RamsCard";
import { Layout } from "antd";

const ProcessorsPage = ({ processors }) => {
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
        <RamsCard key={processor?._id} processor={processor} />
      ))}
    </div>
  );
};

export default ProcessorsPage;

export const getStaticProps = async () => {
  const res = await fetch("https://backend-six-topaz.vercel.app/api/v1/rams");
  const processors = await res.json();
  return { props: { processors } };
};

ProcessorsPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
