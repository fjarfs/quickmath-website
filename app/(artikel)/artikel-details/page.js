"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ArtikelLayout = ({ params }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog-grid");
  }, []);
};

export default ArtikelLayout;
