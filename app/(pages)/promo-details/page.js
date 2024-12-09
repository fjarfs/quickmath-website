"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const PromoDetailLayout = ({ params }) => {
  const router = useRouter();
  const postId = params.courseId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/course-filter-one-toggle");
    }
  }, []);
};

export default PromoDetailLayout;
