import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo/logo.png";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white py-20 px-20">
      <nav>
        <Link href="/">
          <Image src={Logo} alt="BoiPoka" />
        </Link>
        <p className="text-lg mt-5">বই পড়ুন, ভবিষ্যৎ গড়ুন!</p>
      </nav>
      <nav>
        <h6 className="footer-title text-lg">Special</h6>
        <Link href="#">Latest Books</Link>
        <Link href="#">Best Selling Books</Link>
        <Link href="#">Top Rated Books</Link>
        <Link href="#">Advertisement</Link>
      </nav>
      <nav>
        <h6 className="footer-title text-lg">Account & shipping info</h6>
        <Link href="#">Profile</Link>
        <Link href="#">WishList</Link>
        <Link href="#">Return Policy</Link>
        <Link href="#">About BoiPoka</Link>
      </nav>

      <form>
        <h6 className="footer-title text-lg">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item text-gray-950 mt-3"
            />
            <button className="btn border-0 mt-3 shadow-none text-white bg-gray-900 join-item">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

export default Footer;
