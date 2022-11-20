'use client'

import React, { useState } from "react";

export const LikeButtom = ({ id }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <button onClick={() => setLike(!like)}>{like ? "👍" : "👎"}</button>
    </>
  );
};
