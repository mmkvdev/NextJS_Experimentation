// import Queryexperimenter from './QueryExperimenter';
//import LinkRouter from './LinkRouter';
//import ServerSideRendering from './ServerSideRendering';
// import QueryExperimenterPage from './QueryExperimenter/index';
import ClientSideRendering from './ClientSideRendering/ClientSideRendering';
// import Index from './AMPExperimentation / index';
// import Link from 'next/link';
// import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

function IndexApp() {
  return (
    <Layout>
      <div>Welcome To Home Page!!!
        <ClientSideRendering />
      </div>
    </Layout>
  );
}

export default IndexApp;