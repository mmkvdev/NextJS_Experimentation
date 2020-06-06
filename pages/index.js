// import Queryexperimenter from './QueryExperimenter';
//import LinkRouter from './LinkRouter';
//import ServerSideRendering from './ServerSideRendering';
// import QueryExperimenterPage from './QueryExperimenter/index';
import ClientSideRendering from './ClientSideRendering/ClientSideRendering';
import Index from './AMPExperimentation/index';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function IndexApp() {
  return (
    <div>Welcome To Home Page!!!
      <Navbar />
      <ClientSideRendering />
    </div>
  );
}

export default IndexApp;