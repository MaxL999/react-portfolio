import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function PortfolioDisplayProgress({ progress }) {
    if (progress === 100) {
        return <ProgressBar variant="success" now={progress} animated
            label={<p className="tItalic m-0">Finished</p>} />;
    } else if (progress > 75) {
        return <ProgressBar variant="success" now={progress} animated
            label={<p className="tItalic m-0">Unpolished</p>} />;
    } else if (progress > 50) {
        return <ProgressBar variant="warning" now={progress} animated
            label={<p className="tItalic m-0">Partial</p>} />;
    } else {
        return <ProgressBar variant="danger" now={progress} animated
            label={<p className="tItalic p-0">Unfinished</p>} />;
    }
}

export default PortfolioDisplayProgress