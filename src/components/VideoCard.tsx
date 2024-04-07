import React, { FC } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard: FC = ({ video: { id: { videoId }, snippet } }: any) => {
  const navigate = useNavigate()
  const goDetail = (item: any) => {
    navigate("/detail", { replace: true, state: { query: item } });
  }
  // to={videoId ? `/detail/${videoId}` : `/video/cV2gBU6hKfY`}
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 2 }}>
      <div onClick={() => goDetail(videoId ? videoId : 'cV2gBU6hKfY')}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </div>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <div to={videoId ? `/detail` : demoVideoUrl} >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </div>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard