import React from "react";

import NewsPage from "../Components/NewsPage/NewsPage";
import Footer from "../Components/Footer/Footer";
import HeaderNews from "../Components/HeaderNews/HeaderNews";
import CardNews from "../Components/CardNews/CardNews";

export default function page() {
  return (<body className="bg-black">
    
      <div>
        <HeaderNews />
        <NewsPage />
    
        <CardNews />
        <Footer />
      </div>
  </body>
  );
}
