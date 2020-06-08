import { useRouter } from 'next/router';

export default function Header() {
    return (
        <div>
            <Link href="/">
                <button>Home</button>
            </Link>
            <Link href="/about">
                <button>about</button>
            </Link>
        </div>
    );
}
const Link = ({ children, href }) => {
    const router = useRouter();
    // console.log(children, href)
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