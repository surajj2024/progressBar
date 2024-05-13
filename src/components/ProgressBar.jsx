import './progressBar.css'
import PropTypes from 'prop-types';
const ProgressBar = ({ progress }) => {
    const progressBarStyle = {
        width: `${progress}%`,
        backgroundColor: `hsl(${progress * 1.2}, 100%, 50%)`, // Adjust the hue dynamically
    };

    return (
        <div className="progress-bar-container">
            <div className="progress-bar">
                <div className="progress" style={{ width: '100%' }}>
                    <div className="progress-box" style={progressBarStyle}></div>
                    <div className="progress-text">{progress}%</div>
                </div>
            </div>
        </div>
    );
};


ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default ProgressBar;
