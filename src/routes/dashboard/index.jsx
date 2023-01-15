import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/swrhook";

export default function Index() {
  const [time, setTime] = useState(new Date().getHours());
  const { userId } = useParams();
  const [day, setDay] = useState(null);
  const { user, isLoading, isError } = useUser();
  useEffect(() => {
    let id = setInterval(() => setTime(new Date().getHours()), 1800000);
    if (time < 12) setDay("Good Morning");
    if (time >= 12 && time <= 16) setDay("Good Afternoon");
    if (time > 16) setDay("Good Evening");
    return () => clearInterval(id);
  }, [time]);

  return (
    <>
      <div style={{ position: "relative" }} className="u-active-box">
        <h1 className="abs-center u-index">
          {day} {user?.data.user.Name}
        </h1>
      </div>
    </>
  );
}
