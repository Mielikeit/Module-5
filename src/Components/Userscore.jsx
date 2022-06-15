import "./Userscore.css";

export default function Userscore(props) {
  return (
    <div className="Userscore">
      <h3> {props.user} </h3>
      <h3> {props.score} </h3>
    </div>
  );
}
