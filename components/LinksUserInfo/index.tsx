import Image from "next/image";
import Link from "next/link";

export default function LinksUserInfo() {
  return (
    <div className="user-info__links mb-6">
      <ul className="links__social text-center mt-12 flex gap-6 ">
        <li className="social__option">
          <Link href={"/"} className="social__link">
            <Image
              src="svg/linkedin.svg"
              alt="home"
              width={20}
              height={20}
              className="social__icon"
            />
          </Link>
        </li>
        <li className="social__option">
          <Link href={"/"} className="social__link">
            <Image
              src="svg/github.svg"
              alt="home"
              width={22}
              height={22}
              className="social__icon"
            />
          </Link>
        </li>
        <li className="social__option">
          <Link href={"/"} className="social__link">
            <Image
              src="svg/youtube.svg"
              alt="home"
              width={26}
              height={26}
              className="social__icon"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
