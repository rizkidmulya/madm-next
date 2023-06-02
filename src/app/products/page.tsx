import React from "react";
import prisma from "@/lib/prisma";

async function getProducts() {
  return prisma.product.findMany();
}

async function ProductMain() {
  const products = await getProducts();

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}

export default ProductMain;
