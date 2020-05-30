import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function PortfolioDisplayProgress(props) {
    let progress = Number(props.progress)

    if (progress > 75) {
        return <ProgressBar variant="success" now={progress} animated/>;
    } else if (progress > 50) {
        return <ProgressBar variant="warning" now={progress} animated/>;
    } else {
        return <ProgressBar variant="danger" now={props.progress} animated/>;
    }

}

export default PortfolioDisplayProgress