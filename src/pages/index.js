import Layout from '../components/Layout/Layout'

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div>Found {countries.length} countries</div>
    </Layout>
  );
}
// API in the NEXT JS
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all")
  const countries = res.json();
  return { // key-value pair
    props: {
      countries,
    },
  };
};