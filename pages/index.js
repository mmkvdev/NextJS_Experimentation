// import Queryexperimenter from './QueryExperimenter';
//import LinkRouter from './LinkRouter';
//import ServerSideRendering from './ServerSideRendering';
// import QueryExperimenterPage from './QueryExperimenter/index';
import ClientSideRendering from './ClientSideRendering/ClientSideRendering';
import Index from './AMPExperimentation/index';

function IndexApp() {
  return (
    <div>Welcome To Home Page!!!
      <ClientSideRendering />
    </div>
  );
}

export default IndexApp;