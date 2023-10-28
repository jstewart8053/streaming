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
            <p>
              <b>Service: </b>
              {streamingOption.service.toUpperCase()}
            </p>
            <p>
              <b>Streaming Type: </b>
              {streamingOption.streamingType}
            </p>
            <p>
              <b>Quality: </b> {streamingOption.quality}
            </p>
            <p>
              <b>Link: </b>{" "}
              <a href={streamingOption.link}>
                Go to {streamingOption.service.toUpperCase()}
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
