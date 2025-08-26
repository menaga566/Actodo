import { useLocation } from "react-router-dom";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Todocontainer from "../Components/TodoContainer";

function Landing() {
  const location = useLocation();
  const user = location?.state?.user || "Guest";

  return (
    <div className="bg-black p-16">
      <div className="bg-white p-10 border rounded-md">
        <Header name={user} />

        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"20 December"} subtitle={"14:03:34"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>

        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing;