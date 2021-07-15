import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const Right = () => {
  return (
    <div className="right">
      <div className="buttons">
        <button>Buy New Token</button>
      </div>
      <div className="orangeBtn">
        <div className="orange">
          <div className="Oicon">
            <div className="nest">
              <FontAwesomeIcon color="aqua" icon={faUserTie} />
            </div>
          </div>
          <h3>Register As Professional</h3>
        </div>
        <div className="orange">
          <div className="Oicon">
            <div className="nest">
              <FontAwesomeIcon color="aqua" icon={faSlidersH} />
            </div>
          </div>
          <h3>Accrediate Investor</h3>
        </div>

        <div className="blueCard">
          <h4>Total Investment</h4>
          <p>0 BLKCT</p>
          <button>View All</button>
        </div>

        <div className="blueCard">
          <h4>Total Reservations</h4>
          <p>0 Assets</p>
          <button> + &nbsp; Reserve</button>
        </div>
      </div>
    </div>
  );
};

export default Right;
