import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "../API";
import SearchBar from "../controller/SearchBar";
import VideoDetail from "../controller/VideoDetail";
import VideoList from "../controller/VideoList";

export default () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <>
            <Grid
                className="p-3"
                style={{ justifyContent: "center" }}
                container
                spacing={10}
            >
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onSubmit={handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail CurrentVideo={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList
                                videos={videos}
                                onVideoSelect={setSelectedVideo}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

    async function handleSubmit(searchTerm) {
        const {
            data: { items: videos }
        } = await youtube.get("search", {
            params: {
                part: "snippet",
                q: searchTerm,

                key: "AIzaSyCnVlgPvKGfLRgV2eo1D1sNUWKq1XWA6bc"
            }
        });

        setVideos(videos);
        setSelectedVideo(0);
    }
};
