import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch({ location }) {
    return (
        <div className="card p-3 m-2 jumbotron text-center">
            <div className="card-body">
                <h5 className="card-title">Sorry, 404 <code>{location.pathname}</code> not found</h5>
                <Link to={"/"}>Return to Homepage</Link>
                <div className="Bclr1">test</div>
                <div className="Bclr2">test</div>
                <div className="Bclr3">test</div>
                <div className="Bclr4">test</div>
                <div className="Bclr5">test</div>
                <div className="Bclr6">test</div>
                <div className="Bclr7">test</div>
                <div className="Bclr8">test</div>
                <div className="Bclr9">test</div>
                <div className="Bclr10"><p className="clr1">test</p></div>
            </div>
        </div>
    )
}

export default NoMatch