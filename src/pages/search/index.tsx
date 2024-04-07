import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";

import { fetchFromAPI } from "@/http";
import Videos from "@/components/Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${state.query}`)
      .then((data) => setVideos(data.items))
  }, [state.query]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{state.query}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
