import { useFetcher } from "react-router-dom";
import { Button } from "../../components/Button";
import { useUser } from "../../hooks/swrhook";

export default function ConfirmEmail() {
  const Fetcher = useFetcher();
  const { user } = useUser();
  const loadingState = Fetcher.state;
  return (
    <Fetcher.Form
      style={{ position: "relative" }}
      method="post"
      className="u-active-box"
    >
      <div className="abs-center u-active-index">
        {user?.data.user.active ? (
          <p className="p-lg">Your account is already active</p>
        ) : (
          <Button
            style={
              loadingState === "loading" || loadingState === "submitting"
                ? "processing"
                : "idle"
            }
            isDisabled={
              loadingState === "submitting" || loadingState === "loading"
            }
            msg="Send confirmation email "
            nameClass="primary-button dashboard-section__confirm-email-btn"
          />
        )}
      </div>
    </Fetcher.Form>
  );
}
