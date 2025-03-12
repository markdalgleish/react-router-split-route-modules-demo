import { Form } from "react-router";
import type { Route } from "./+types/route";

import image from "../assets/image.jpg?url";

export async function clientLoader() {
  let { message } = await fetch("/resource").then((res) => res.json());
  if (typeof message !== "string") throw new Error("Invalid response");
  return { message };
}

export async function clientAction({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const message = formData.get("message");
  return { message: typeof message === "string" ? message : null };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function Route({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <>
      <p>Loader data: {loaderData.message}</p>
      <p>Action data: {actionData?.message}</p>
      <Form method="post" autoComplete="off">
        <label>
          Message: <input type="text" name="message" />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>

      <hr />
      <img src={image} alt="Image" width="500" height="360" />
    </>
  );
}
