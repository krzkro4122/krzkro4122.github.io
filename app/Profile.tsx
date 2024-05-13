import Image from "next/image";

export const Profile = () => {
  return (
    <Image
      src="/profile_pic.png"
      className="w-[8dvh] h-[8dvh] rounded-full outline outline-2 outline-black"
      width={20}
      alt="My profile photo."
    />
  );
};
