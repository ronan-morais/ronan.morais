import { NextPage } from "next";
import Image from "next/image";

interface Props {
  className?: string;
}

const Logo = (props: Props) => {
  return (
    <>
      <Image
        {...props}
        src="/images/icon.svg"
        width="100"
        height="100"
        alt="Zeebra"
      />
    </>
  );
};

export default Logo;
