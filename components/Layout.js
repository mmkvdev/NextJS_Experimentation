import Navbar from './Navbar';
import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Experimental Thymesia</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            </Head>
            <Navbar />
            {props.children}
        </div>
    );
}

export default Layout;