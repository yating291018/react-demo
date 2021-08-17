import React, { useState } from "react";

export default function FnComponent() {
  const [nums, setNums] = useState(0);

  const changeNums = () => {
    setNums(nums + 1);
  };

  const changeNums2 = () => {
    setNums2(nums2 + 1);
  };

  const [nums2, setNums2] = useState(1);
  return (
    <div style={{ width: "100%" }}>
      <div onClick={changeNums}>{nums}</div>
      <div onClick={changeNums2}>{nums2}</div>
    </div>
  );
}
