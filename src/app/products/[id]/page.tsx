import React from "react";

const ProductDetail = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return <div>Product: {params?.id}</div>;
};

export default ProductDetail;
