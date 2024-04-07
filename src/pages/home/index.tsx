import Videos from '@/components/Videos';
import { fetchFromAPI } from '@/http';
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {

    console.log(fetchFromAPI, 'fetchFromAPI')

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [selectedCategory]);
  return (
    <div >
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#333" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </div>
  );
}

export default Home;
