import Image from "next/image";

export default function GeneralUserInfo() {
  return (
    <div className="user-info__general flex flex-col items-center">
      <div className="user-info__container-image w-48 mt-12 relative aspect-square bg-white border-[3px] border-white rounded-full overflow-hidden">
        <Image
          src="/img/me.jpg"
          alt="Santiago-Suarez"
          fill
          className="user-info__image"
        />
      </div>
      <h2 className="user-info__name text-white text-3xl font-bold mt-6">
        Santiago Suarez
      </h2>
      <h4 className="user-info__job text-lg font-light text-white">
        Web Developer
      </h4>
    </div>
  );
}
