import russian from "./russian.png";
import _for from "./for.png";
import ej from "./ej.png";

export const Logo = () => {
  return (
    <div>
      <img alt="Russian" src={russian} height="30" />
      <img alt="for" src={_for} height="30" />
      <img alt="EJ" src={ej} height="30" />
    </div>
  );
};
