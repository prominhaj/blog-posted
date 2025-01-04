import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/" aria-label="Go to homepage">
        <h1 className="text-xl font-bold flex items-center font-heading">
          {/* <Image
            src="/path-to-your-logo.svg"
            alt="BLOG PosteD Logo"
            width={50} 
            height={50} 
            priority
          /> */}
          <span className="">BLOG PosteD</span>
        </h1>
      </Link>
    </div>
  );
}
