import { Typography } from "@mui/material";
import { React } from "react";

export default function Synonyms ({synonyms}) {
    return (
        <Typography>{synonyms.length}</Typography>
    )
}