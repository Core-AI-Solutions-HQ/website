import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Core AI Solutions Ltd"
      width={720}
      height={240}
      priority
      className={`h-12 w-auto object-contain object-left sm:h-14 lg:h-16 ${className}`}
    />
  );
}
