import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Err404 from "../components/Err404";

export default function ActivateAccountRoute() {
  const data = useLoaderData();

  if (data.status !== 200) return <Err404 />;
  return (
    <>
      <Navbar />
      <p className="abs-center activate-tag">{data.message}</p>
    </>
  );
}
