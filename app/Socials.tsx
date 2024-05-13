import Image from "next/image";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="flex justify-evenly p-2">
      <Link href="https://github.com/krzkro4122" target="_blank">
        <Image
          src="/github.png"
          alt="Github profile"
          className="max-h-14 max-w-min hover:scale-105 active:opacity-80"
        />
      </Link>
      <Link href="https://linkedin.com/in/krzysztof-krol1" target="_blank">
        <Image
          src="/linkedin.png"
          alt="LinkedIn profile"
          className="max-h-14 max-w-min hover:scale-105 active:opacity-80"
        />
      </Link>
    </div>
  );
};
