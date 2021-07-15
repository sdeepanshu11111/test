import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faTh,
  faTicketAlt,
  faThLarge,
  faShoppingBag,
  faSortDown,
  faMoneyCheckAlt,
  faQuestionCircle,
  faAddressCard,
  faSignOutAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside>
      <ul>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon color="white" icon={faThLarge} size="1x" />
            </div>
            <h2>Dashboard</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <h2>Pre-Reserve</h2>
            <FontAwesomeIcon color="black" icon={faSortDown} size="0.3x" />
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faMoneyCheckAlt} />
            </div>
            <h2>Invest</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            <h2>Buy Token</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </div>
            <h2>FAQ</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon className="far" icon={faInfoCircle} />
            </div>
            <h2>Support</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon color="#010727" icon={faAddressCard} />
            </div>
            <h2>Kyc</h2>
          </div>
        </li>
        <li>
          <div className="list">
            <div className="icon">
              <FontAwesomeIcon color="red" icon={faSignOutAlt} />
            </div>
            <h2>Logout</h2>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
