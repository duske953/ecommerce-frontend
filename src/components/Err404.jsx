import Navbar from "./Navbar";
import pageNotFoundImg from "../assets/undraw_page_not_found_re_e9o6.svg";
import { DisplayErr } from "../utilities/utility";
import Footer from "./Footer";
export default function Err404() {
  return (
    <>
      <Navbar />
      <DisplayErr>
        <img src={pageNotFoundImg} alt="err 404 not found" />
      </DisplayErr>
      <Footer />
    </>
  );
}
