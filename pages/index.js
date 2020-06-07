import Layout from '../components/Layout';
import Prices from '../components/Prices';

function IndexApp(props) {
  return (
    <Layout>
      <h1>
        Welcome To Home Page!!!
      </h1>
      <Prices bpi={props.bpi} />
    </Layout>
  );
}

IndexApp.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
}

export default IndexApp;