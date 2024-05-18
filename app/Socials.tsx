// import githubLogo from "@/public/github.png";
// import linkedinLogo from "@/public/linkedin.png";

import Image from "next/image";
import Link from "next/link";
import { publicPrefix } from "./cards";

export const Socials = () => {
  return (
    <div className="flex justify-end gap-2">
      <Link
        className="shadow-lg border-2 flex items-center justify-center border-black max-h-[7dvh] max-w-[7dvh] lg:max-h-[6dvh] lg:max-w-[6dvh] rounded-md hover:scale-105 hover:bg-gray-100 active:bg-gray-200"
        href={`${publicPrefix}/CV-18-05-2024.png`}
        locale={false}
        download={true}
      >
        <Image
          src={`${publicPrefix}/cv.png`}
          // src={cvLogo || `${imagePrefix}/cv.png`}
          alt="Curriculum Vitae"
          className="p-2 hover:scale-105 active:opacity-80"
        />
      </Link>
      <Link
        className="shadow-lg border-2 border-black max-h-[7dvh] max-w-[7dvh] lg:max-h-[6dvh] lg:max-w-[6dvh] rounded-md hover:scale-105 hover:bg-gray-100 active:bg-gray-200"
        href="https://github.com/krzkro4122"
        target="_blank"
      >
        <Image
          src={`${publicPrefix}/github.png`}
          // src={githubLogo || `${imagePrefix}/github.png`}
          alt="Github profile"
          className="p-2 hover:scale-105 active:opacity-80"
        />
      </Link>
      <Link
        className="shadow-lg border-2 border-black max-h-[7dvh] max-w-[7dvh] lg:max-h-[6dvh] lg:max-w-[6dvh] rounded-md hover:scale-105 hover:bg-gray-100 active:bg-gray-200"
        href="https://linkedin.com/in/krzysztof-krol1"
        target="_blank"
      >
        <Image
          src={`${publicPrefix}/linkedin.png`}
          // src={linkedinLogo || `${imagePrefix}/linkedin.png`}
          alt="LinkedIn profile"
          className="p-2 hover:scale-105 active:opacity-80"
        />
      </Link>
    </div>
  );
};
