import Navbar from './Navbar';
import Head from 'next/head';
import Button from './Button';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Experimental Thymesia</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
            </Head>
            <Navbar />
            <Button />
            <div className="container">
                {props.children}
            </div>
            <style jsx>{`
                .container{
                background-color: red;
                }
            `
            }</style>
        </div>
    );
}

export default Layout;