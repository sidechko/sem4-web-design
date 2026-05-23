import {Link} from "react-router-dom";
import './PageNotFound.css'
import NotFoundSvg from "../../../public/assets/not_found.svg?react";

function PageNotFound() {
    const url = window.location.href;
    return (
        <>
            <section className={'section404'}>
                <h1 id={'text404'}>404</h1>
                <NotFoundSvg id={'not-found'} />
                <h1 className={'message'}>Page not found.</h1>
                <hr className={'message'}/>
                <h2 className={'message'}>Page does not exist at url: {url}</h2>
                <Link id={'home-page-button'} className={'accent-clickable'} to={'/threads/0'}>
                    Go to main page
                </Link>
            </section>
        </>
    )
}

export default PageNotFound;