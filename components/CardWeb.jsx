import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import "../app/styles/icons.css";

const getFaviconUrl = (url) =>
  `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`;

const cardStyles = {
  maxWidth: 350,
  maxHeight: 150,
  backgroundColor: "#212125",
  border: "1px grey solid",
  boxShadow: "15"
};

const descriptionStyles = {
  fontSize: 10,
  fontWeight: "regular",
  color: "grey",
  maxHeight: "150px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
};

const CardWeb = ({ web: { name, description, url } }) => {
  return (
    <div className="m-3">
      <Link href={url} target="_blank">
        <Card sx={cardStyles}>
          <CardActionArea>
            <div className="flex flex-row align-middle">
              <div className="m-5">
                <Image
                  className="image"
                  width={50}
                  height={50}
                  quality={100}
                  src={getFaviconUrl(url)}
                  alt={name}
                />
              </div>

              <CardContent>
                <Typography
                  sx={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  gutterBottom
                >
                  {name}
                </Typography>
                <Typography sx={descriptionStyles} gutterBottom>
                  {description}
                </Typography>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default CardWeb;
