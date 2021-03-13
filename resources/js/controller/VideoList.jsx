import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect }) => {
    const listOfVideo = videos.map((video, index) => {
        return (
            <VideoItem
                onVideoSelect={onVideoSelect}
                key={index}
                video={video}
            />
        );
    });

    return (
        <Grid container spacing={10}>
            {listOfVideo}
        </Grid>
    );
};
