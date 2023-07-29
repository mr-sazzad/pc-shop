import RootLayout from "@/components/layout/RootLayout";
import Banner from "@/components/ui/Banner";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import { Layout } from "antd";
import Head from "next/head";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <Banner />
        <FeaturedProducts products={products?.data} />
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-six-topaz.vercel.app/api/v1/featured"
  );
  const products = await res.json();
  return { props: { products } };
};

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <RootLayout>{page}</RootLayout>
    </Layout>
  );
};
