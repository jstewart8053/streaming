import React from "react";

function Cards(props) {
  const usStreamingInfo = props.streamingInfo?.us || [];

  // Create an array to store unique service providers
  const uniqueServiceProviders = [];

  // Loop through the streaming options and add unique service providers to the array
  usStreamingInfo.forEach((streamingOption) => {
    if (
      !uniqueServiceProviders.some(
        (provider) => provider.service === streamingOption.service
      )
    ) {
      uniqueServiceProviders.push(streamingOption);
    }
  });

  return (
    <>
      {uniqueServiceProviders.map((streamingOption, index) => (
        <div className="cardHolder" style={{ width: "18rem" }} key={index}>
          <div className="cardHolder-body">
            <h5 className="cardHolder-title">{props.originalTitle}</h5>
            <p>Service: {streamingOption.service}</p>
            <p>Streaming Type: {streamingOption.streamingType}</p>
            <p>Quality: {streamingOption.quality}</p>
            <p>
              Link: <a href={streamingOption.link}>Go to Streaming Option</a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
