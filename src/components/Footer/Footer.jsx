import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-top">
        <a href="#" className="footer-top__link footer__link text-dark">
          Questions? Contact us.
        </a>
      </p>
      <div className="footer-cols">
        <ul>
          <li>
            <a className="footer__link" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Investor Relations
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Privacy
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Speed Test
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__link" href="#">
              Help Center
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Jobs
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Cookie Preferences
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Legal Notices
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__link" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Ways to Watch
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Corporate Information
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Netflix Originals
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="footer__link" href="#">
              Media Center
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Terms of Use
            </a>
          </li>
          <li>
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-country">Netflix Anywhere</p>
    </footer>
  );
};

export default Footer;
