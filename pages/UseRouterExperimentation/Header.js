import { useRouter } from 'next/router';

export default function Header() {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
        </div>
    );
}
const Link = ({ children, href }) => {
    const router = useRouter();
    console.log(children, href)
    const style = {
        marginRight: 10,
        color: router.pathname === href ? 'red' : 'yellow'
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style}>
            children: {children}
        </a>
    );
}

// export default UseRouterExperimentationRouter;