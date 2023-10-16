// styles
import "./style.css";

// imgs
import github from "./img/gitHub.svg";
import vk from "./img/vk.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/nechaaaaaika">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/kianurivzzz">
                <img src={github} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 Nikita Karasyov</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
