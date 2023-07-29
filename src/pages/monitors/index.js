import RootLayout from "@/components/layout/RootLayout";
import MonitorCard from "@/components/ui/MonitorCard";
import { Layout } from "antd";

const MonitorPage = ({ monitors }) => {
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
        <MonitorCard key={monitor?._id} monitor={monitor} />
      ))}
    </div>
  );
};

export default MonitorPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/monitors"
  );
  const monitors = await res.json();
  return { props: { monitors } };
};

MonitorPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
