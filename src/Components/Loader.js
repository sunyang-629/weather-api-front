import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function loader() {
    return (
        <div className="flex-centered">
            <CircularProgress size="8em" />
        </div>
    )
}

export default loader;