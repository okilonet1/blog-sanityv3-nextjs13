import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://www.sanity.io/static/images/sanity-logo.svg"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>KACHI's BLOG</h1>
      </div>
      <div>
        <Link
          href="https://onyekachi.dev"
          className="px-3 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Checkout my portfolio
        </Link>
      </div>
    </header>
  );
}

export default Header;
