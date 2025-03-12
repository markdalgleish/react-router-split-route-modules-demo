# react-router-split-route-modules-demo

A small (contrived) demo of React Router's split route modules feature.

## Running the demo

First, start up a server with the production build:

```bash
pnpm build && pnpm start
```

Then, open your browser to http://localhost:3000.

Look at network tab in your browser's dev tools while clicking the link to `/route` on the home page. You can see the `clientLoader` chunk is downloaded and executed (hitting the `/resource` endpoint) before the main route component chunk has finished downloading. This is not possible if the loader and component are in the same chunk.

Note that the `clientAction` chunk is also preloaded in parallel, so the form submission on `/route` will be processed instantly.

The other thing to note is that the `HydrateFallback` component (which shows a simple loading message, but would be larger in a real app) is only downloaded when `/route` is server-rendered. If you navigate to `/route` via the link on the home page, you can see that the `HydrateFallback` chunk isn't downloaded at all.

---

To see the problem this feature solves, disable the `future.unstable_splitRouteModules` flag in `react-router.config.ts`. Now, if you click the link to `/route` on the home page, you can see that the `/resource` endpoint is not hit until the entire route module (including the component) has finished downloading.
