import { useSearchParams } from "react-router-dom";
import { Form } from "react-router-dom";
import { ButtonLink, Button } from "./Button";
export default function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    console.log(searchParams);
  }
  return (
    <div className="input-box">
      <Form
        role="search"
        className="input-box__container"
        method="get"
        action="/products/search"
        onSubmit={handleSubmit}
      >
        <input
          className="input-box__input"
          placeholder="Start shopping tech"
          type="text"
          id="q"
          name="q"
        />
        <input hidden name="page" defaultValue={1} />
        <Button msg="Search" nameClass="input-box" style={"idle"} />
      </Form>
    </div>
  );
}
