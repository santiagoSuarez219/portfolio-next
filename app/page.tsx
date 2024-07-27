import UserInfoAside from "@/components/UserInfoAside";

export default function Home() {
  return (
    <>
      <div className="layout relative min-w-[1290px] w-[70%] h-[80vh] min-h-[80vh] my-[10vh] mx-auto rounded-3xl shadow-layout">
        <aside className="layout__aside rounded-tl-3xl rounded-bl-3xl overflow-auto overflow-x-hidden">
          <UserInfoAside />
        </aside>
        <main className="layout__content bg-secondary rounded-r-3xl h-full min-h-full">
          {/* Esto es lo va a variar */}
          <section className="content_page bg-white min-h-full rounded-3xl flex flex-col justify-center items-center gap-4">
            <h1 className="text-5xl">Santiago Suarez</h1>
            <h2 className="text-xl text-subtitles-color">Web Developer</h2>
          </section>
        </main>
      </div>
    </>
  );
}
