import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">Experimental Thymesia</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link">About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/QueryExperimenter/[id]" as="/QueryExperimenter/abc"><a className="nav-link">Query Experimenter</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/UseRouterExperimentation/[id]" as="/UseRouterExperimentation/abc"><a className="nav-link">UserRouterExperimentation</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;