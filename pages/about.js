import Link from 'next/link';

const About = () => {
    return (
        <div>
            Welcome to About Page
            <ul>
                <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
                </li>
                <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default About;