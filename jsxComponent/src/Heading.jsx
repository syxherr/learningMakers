import { useContext } from "react";
import { ContextApi } from "./ContextApi.jsx";

export default function Heading() {
  const { count } = useContext(ContextApi);

  return <h1>hai {count}</h1>;

}