import Navbar from "./Navbar";
import { DisplayErr } from "../utilities/utility";
import ServerDown from "../assets/undraw_server_down_s-4-lk.svg";
import Title from "./Title";
export default function NetworkError() {
  return (
    <>
      <Navbar />
      <DisplayErr>
        <Title title="Network Error" />
        <img src={ServerDown} alt="server down" />
      </DisplayErr>
    </>
  );
}
