import { useEffect, useState } from 'react';
import axios from "axios";

const useFetchEpisides = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
      const fetchEpisode = (url) => {
        axios.get(url).then((resp) => {
            setData(resp.data);
            setLoading(false);
            setNextPageUrl(resp.data.info.next);
            setPrevPageUrl(resp.data.info.prev);
        })
    
    };
    fetchEpisode(url)
  }, [url]);
  




 
  return { data, loading, nextPageUrl, prevPageUrl };
};

export default useFetchEpisides;