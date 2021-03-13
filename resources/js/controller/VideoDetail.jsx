import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ CurrentVideo }) => {
    if (!CurrentVideo) return <div>Loading....</div>;

    const videoSrc = `https://www.youtube.com/embed/${CurrentVideo.id.videoId}`;

    return (
        <>
            <Paper elevation={6} style={{ height: "70%" }}>
                <iframe
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h4">
                    {CurrentVideo.snippet.title} -{" "}
                    {CurrentVideo.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle1">
                    {CurrentVideo.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {CurrentVideo.snippet.description}
                </Typography>
            </Paper>
        </>
    );
};
