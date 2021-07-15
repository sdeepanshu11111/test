import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTh } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside>
      <ul>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon color="white" icon={faTh} size="1x" />
            </div>
            <h2>Dashboard</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faTh} />
            </div>
            <h2>Pre-Reserve</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h2>Invest</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h2>Buy Token</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h2>Faq</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h2>Support</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <h2>Kyc</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon color="red" icon={faPlay} />
            </div>
            <h2>Logout</h2>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
