import Layout from '../components/Layout';
import Router from 'next/router';
const About = () => {
    return (
        <Layout>
            <div>
                Welcome to About Page
                <button onClick={() => Router.push('/QueryExperimenter/[id]','/QueryExperimenter/abs')}>GO BACK TO HOME PAGE</button>
                <button onClick={() => Router.back()}>BACK</button>
            </div>
        </Layout>
    );
}

export default About;