import "./StaticGame.css";
import cat from "../Animations/cat01_run_12fps.gif";
import mouse from "../Animations/mouse03_run_12fps.gif";

export default function Game() {
  return (
    <div className="Game">
      <div className="CatAnimation">
        <div className="StaticGame">
          <div className="Character">
            <img src={cat} alt="mousetrap" height={325} width={325} />
          </div>
          <div className="Block"></div>
          <div className="Mouse">
            <img src={mouse} alt="mousetrap" height={175} width={175} />
          </div>
        </div>
      </div>
    </div>
  );
}
