import { Container, ProductImage, Title } from "@/components/shared";
import { GroupVariants } from "@/components/shared/group-variants";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import React from "react";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex my-10 ">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} className="" size={40} />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, mollitia nostrum eum, sequi nulla voluptatibus maiores
          ut earum modi suscipit repudiandae porro dolorum repellendus inventore
          autem accusamus, tenetur quia pariatur!
        </p>

        <GroupVariants
          value={"традиционное"}
          items={[
            { name: "тонкое", value: "тонкое" },
            { name: "традиционное", value: "традиционное" },
          ]}
        />
      </div>
    </Container>
  );
};

export default ProductPage;
