import Layout from '../components/Layout/Layout'

export default function Home() {
  return <Layout>Main</Layout>;
}
// API in the NEXT JS
export const getStaticProps = async () => {
  const res = await fetch("")
  const countries = res.json();
  return { // key-value pair
    props: {
      countries,
    },
  };
};