import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Videos from "@/components/Videos";
import Loader from "@/components/Loader";
import { fetchFromAPI } from "@/http";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<any>(null);
  const [videos, setVideos] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${state.query}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${state.query}&type=video`)
      .then((data) => setVideos(data.items))
  }, [state.query]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box height="100vh" >
      <Stack direction={{ xs: "column", md: "row", lg: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky" }}>
            <ReactPlayer className='react-player' width='100%'
              height='600px' url={`https://www.youtube.com/watch?v=${state.query}`} controls />
            <Typography variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{}} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} justifyContent="center" alignItems="center" className="h-[calc(100vh-78px)] overflow-y-auto">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
