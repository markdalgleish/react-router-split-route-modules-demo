import type { Route } from "./+types/home";
import { href, Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h2>
        <Link to={href("/route")}>Go to route</Link>
      </h2>
    </>
  );
}
