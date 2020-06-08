import Router from 'next/router';

const Home = () => {
    return (
        <div>
            Welcome to Home Page
            <button onClick={() => Router.push('/StaticGeneration/[id]', '/StaticGeneration/1')}>GO TO HOME PAGE</button>
        </div>
    );
}

export default Home;