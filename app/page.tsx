import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <h1>Hola mundo</h1>
      <FontAwesomeIcon icon={"fa-regular fa-star"} />
      <div className="layout">
        <aside className="layout__aside">
          <section className="aside__user-info">
            <div className="user-info__general">
              <div className="user-info__container-image">
                {/* Cargar image class user-info__image */}
              </div>
              <h2 className="user-info__name">Santiago Suarez</h2>
              <h4 className="user-info__job">Desarrollador web</h4>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
