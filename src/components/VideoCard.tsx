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
  const goChannel = (item: any) => {
    navigate("/channel", { replace: true, state: { query: item } });
  }
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 2 }}>
      <div onClick={() => goDetail(videoId ? videoId : 'cV2gBU6hKfY')}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </div>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <div onClick={() => goDetail(videoId ? videoId : 'cV2gBU6hKfY')}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </div>
        {/* to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} */}
        <div onClick={() => goChannel(snippet?.channelId ? snippet?.channelId : 'demoChannelUrl')} >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default VideoCard