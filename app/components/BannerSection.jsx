import Link from "next/link";

export default function Banner() {
  return (
    <Link href="/vip" className="block w-full">
      {/* Desktop banner — hidden on mobile */}
      <img
        src="/banner-desktop.webp"
        alt=""
        width={1920}
        height={550}
        className="hidden w-full md:block"
      />
      {/* Mobile banner — hidden on desktop */}
      <img
        src="/banner-mobile.webp"
        alt=""
        width={1920}
        height={1080}
        className="block w-full md:hidden"
      />
    </Link>
  );
}