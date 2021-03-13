import React from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const onKeyPress = e => {
        if (e.key === "Enter") {
            onSubmit(searchTerm);
        }
    };

    return (
        <div>
            <Paper elevation={6} style={{ padding: "25px" }}>
                <TextField
                    fullWidth
                    label="Search..."
                    value={searchTerm}
                    onChange={e => {
                        setSearchTerm(e.target.value);
                    }}
                    onKeyPress={onKeyPress}
                />
            </Paper>
        </div>
    );
};
