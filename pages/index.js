// import Queryexperimenter from './QueryExperimenter';
//import LinkRouter from './LinkRouter';
//import ServerSideRendering from './ServerSideRendering';
// import QueryExperimenterPage from './QueryExperimenter/index';
import ClientSideRendering from './ClientSideRendering/ClientSideRendering';
// import Index from './AMPExperimentation / index';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';

function IndexApp(props) {
  return (
    <Layout>
      <div>Welcome To Home Page!!!
        {props.bpi.time.updated}
        <ClientSideRendering />
      </div>
    </Layout>
  );
}

IndexApp.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data
  };
}

export default IndexApp;