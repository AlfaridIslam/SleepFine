import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SofaSample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/67077716ad19ca34f8b5ee07', {
        headers: {
          'X-Master-Key': '$2a$10$pAhc2cg3tjH4VNesRa5myeVQV6agrzBowEdSWVjO6HWOf9w5z7z6G',
          'X-Access-Key': '$2a$10$DMQu4C5ixvkEgz6ir036auyUQTF2cxFiUfMuIZiKm8/kFGa2NLBP.',
        },
      })
      .then((result) => {
        console.log(result.data); // Check the structure of the response
        setData(result.data.record); // Store the full sofa data record
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data', error);
        setLoading(false); // Stop loading in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  // Iterate over the different sofa categories
  return (
    <div>
      <h1>Sofa Collection</h1>
      {Object.keys(data).map((sofaType, index) => (
        <div key={index}>
          <h2>{data[sofaType].title2}</h2>
          <p>{data[sofaType].content2}</p>
          <ul>
            {data[sofaType].images.map((imgSrc, imgIndex) => (
              <li key={imgIndex}>
                <img src={imgSrc.trim()} alt={`${data[sofaType].title2} Image`} width="200" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SofaSample;
