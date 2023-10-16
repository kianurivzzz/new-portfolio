const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Simferopol, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">WhatsApp</h2>
            <p>
              <a href="tel:+79002467963">+7 (900) 246-79-63</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="http://t.me/Nikita_Karasyov">@Nikita_Karasyov</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:nikitakarasev177@gmail.com">
                nikitakarasev177@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
