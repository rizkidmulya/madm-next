"use client";

import { Card, CardHeader, CardMedia } from "@mui/material";
import React from "react";
import DefaultImage from "@/assets/no-image.png";
import Image from "next/image";

type ProductCardProps = {
  id?: string;
  name?: string;
  description?: string;
  originalPrice?: number;
  sellingPrice?: number;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const ProductCard = (props: ProductCardProps) => {
  const {
    id,
    name,
    description,
    originalPrice,
    sellingPrice,
    createdAt,
    image,
    updatedAt,
  } = props;

  const formatDate = (date: Date) =>
    date.toLocaleDateString("id-ID", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={createdAt ? formatDate(createdAt) : ""}
      />
      <CardMedia
        component={"img"}
        height="194"
        image="/no-image.png"
        alt="Product"
      />
    </Card>
  );
};

export default ProductCard;
