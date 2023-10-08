import React from "react";
interface Props {
  params: { slug: String[] };
  searchParams: { sortOrder: String };
}
const productPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug}
      {sortOrder}
    </div>
  );
};

export default productPage;
