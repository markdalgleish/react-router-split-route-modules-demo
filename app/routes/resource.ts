import type { Route } from "./+types/resource";

export async function loader() {
  return { message: "Hello world" };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const message = formData.get("message");
  return { message: typeof message === "string" ? message : null };
}
