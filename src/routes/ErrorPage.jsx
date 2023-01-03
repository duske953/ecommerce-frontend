import { useRouteError } from "react-router-dom";
import { DisplayErr } from "../utilities/utility";
import pageNotFoundImg from "../assets/undraw_page_not_found_re_e9o6.svg";

export default function ErrorPage() {
  return (
    <>
      <DisplayErr>
        <img src={pageNotFoundImg} alt="err 404 not found" />
      </DisplayErr>
    </>
  );
}
