import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="overflow-hidden rounded-full">
      <Image
        src="https://i.pravatar.cc/150?img=12"
        width={35}
        height={35}
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
