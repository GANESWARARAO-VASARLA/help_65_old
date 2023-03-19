import React from 'react';

const iframeStyle = {
    width: '100%',
     minHeight: '700px',
      marginTop: '40px'
}

function LiveCovidUpdates(){
    return(
        <div>
    <iframe loading="lazy" title="covid data" style={iframeStyle} src="https://experience.arcgis.com/experience/df7c6fc5a5eb411f8957ff43ecbd9353"></iframe>
  
        </div>
    );
}

export default LiveCovidUpdates;