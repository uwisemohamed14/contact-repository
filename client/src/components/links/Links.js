import React, {Fragment, useContext } from 'react';
import LinkItem from './LinkItem';
import LinkContext from '../../context/link/linkContext';

const Links = () => {
    const linkContext = useContext(LinkContext);

    const { links } = linkContext;
    return (
        <Fragment>
            {links.map(link => <h3>
                <LinkItem key={link.id} link={link}/>
            </h3>)}
        </Fragment>
    )
}

export default Links;
