import React from "react";
import prisma from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";
import { Box } from "@mui/material";
import Link from "next/link";

async function getProducts() {
  return prisma.product.findMany();
}

async function ProductMain() {
  const products = await getProducts();

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((p) => (
        <Link key={p.id} href={`/products/${p.id}`}>
          <ProductCard {...p} />
        </Link>
      ))}
    </div>
  );
}

export default ProductMain;
