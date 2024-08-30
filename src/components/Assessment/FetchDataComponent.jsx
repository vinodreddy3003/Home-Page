import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Assessment from './Assessment';
import Loading from './Loading';

const FetchDataComponent = () => {
  const { courseName } = useParams(); // Get the course name from the URL
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let tempArray = [];
      for (let i = 1; i <= 10; i++) {
        try {
          const response = await axios.get(`https://iohpo6uldwgeqgeiddliptycke0gefgy.lambda-url.ap-south-1.on.aws/${courseName}/${i}`);
          tempArray.push(response.data);
        } catch (error) {
          console.error(`Error fetching data for URL ${i}:`, error);
        }
      }
      setData(tempArray);
       setIsLoading(false);
    }
        

    fetchData();
  }, [courseName]);

  if (isLoading) {
    return <Loading />;
  }

   

  return (
    <div>
      <Assessment courseName={courseName} questions={data} />
    </div>
  );
};

export default FetchDataComponent;
