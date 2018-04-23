import React from 'react';

const Files = ({ files }) => {
    return (
        <div className="body">
            {files.map(file =>
                <div className="folder" key={file.toString()}>
                    <div className="file-icon"></div>
                    <span className="file-name"> {file.name} </span>
                    <span className="file-info"> {file.info} </span>
                </div>
            )}
        </div>
    );
};

export default Files;
