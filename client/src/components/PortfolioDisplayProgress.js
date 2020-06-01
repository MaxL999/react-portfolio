import React, { useContext } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ThemeContext } from '../context/ThemeContext';

function PortfolioDisplayProgress({ progress }) {
    const { theme } = useContext(ThemeContext)

    if (progress === 100) {
        return <ProgressBar variant="success" now={progress}
            label={<p className={"tItalic m-0" + theme.txt1}>Finished</p>} />;
    } else if (progress > 75) {
        return <ProgressBar variant="success" now={progress}
            label={<p className={"tItalic m-0" + theme.txt1}>Unpolished</p>} />;
    } else if (progress > 50) {
        return <ProgressBar variant="warning" now={progress}
            label={<p className={"tItalic m-0" + theme.txt1}>Partial</p>} />;
    } else {
        return <ProgressBar variant="danger" now={progress}
            label={<p className={"tItalic m-0" + theme.txt1}>Unfinished</p>} />;
    }
}

export default PortfolioDisplayProgress