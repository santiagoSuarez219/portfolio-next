import Link from "next/link";
import Image from "next/image";

import GeneralUserInfo from "../GeneralUserInfo";
import LinksUserInfo from "../LinksUserInfo";
import Menu from "../Menu";

export default function UserInfoAside() {
  return (
    <section className="aside__user-info flex flex-col items-center text-center min-h-full bg-secondary text-white">
      <GeneralUserInfo />
      <Menu />
      <LinksUserInfo />
      <div className="user-info__buttons mt-8 mb-8">
        <Link
          href={"/"}
          className="user-info__btn border-2 border-white px-12 py-5 rounded-full text-white font-bold shadow-button hover:bg-white hover:text-secondary transition-all duration-300 ease-in-out"
        >
          Download CV
        </Link>
      </div>
      <footer className="user-info__footer absolute bottom-6 text-sm">
        &copy; 2024 Santiago Suarez
      </footer>
    </section>
  );
}
