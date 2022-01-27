import React from "react";
import Header from "Components/Common/Header";
import ProductPeriod from "Components/ProductPeriod";
import ProductInformation from "Components/ProductInformation";
import ProductOption from "Components/ProductOption";
import ProductIntroImage from "Components/ProductIntroImage";
import ProductRecommendImage from "Components/ProductRecommendImage";
import ProductNotice from "Components/ProductNotice";
import ProductShippingSetting from "Components/ProductShippingSetting";

function ProductRegister() {
  return (
    <div>
      <Header />
      <ProductPeriod />
      <ProductInformation />
      <ProductOption />
      <ProductIntroImage />
      <ProductRecommendImage />
      <ProductNotice />
      <ProductShippingSetting />
    </div>
  );
}

export default ProductRegister;
