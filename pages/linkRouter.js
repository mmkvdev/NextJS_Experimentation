import Link from 'next/link';
import { withRouter } from 'next/router';

function linkRouter() {
    return (
        <Link href="/queryexperimenter/[query_id]" as="/queryexperimenter/MMK">
            <a>Query Experimenter Page</a>
        </Link>
    );
}

export default withRouter(linkRouter);