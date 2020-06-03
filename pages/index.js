import queryexperimenter from './queryexperimenter';
import linkRouter from './linkRouter';

function IndexApp() {
  return (
    <div>Welcome To Home Page!!!
      <linkRouter />
      <queryexperimenter />
    </div>
  );
}

export default IndexApp;