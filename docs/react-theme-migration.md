# React and theme migration

Upgrade `react` and `react-dom` together before upgrading musae. musae declares both as peers in the `^19.3.1` range. Pin the latest stable version of both packages in the application and commit the application lockfile. With pnpm, run:

```sh
pnpm add --save-exact react@latest react-dom@latest
```

Group both packages in your dependency updater. In the consuming application's release CI, install from the lockfile with `pnpm install --frozen-lockfile`, then run this check from the application workspace:

```sh
node --input-type=commonjs <<'NODE'
const { execFileSync } = require("node:child_process");

const packages = ["react", "react-dom"];
const versions = packages.map((name) => {
  const installed = require(`${name}/package.json`).version;
  const latest = JSON.parse(execFileSync("npm", ["view", `${name}@latest`, "version", "--json"], {
    encoding: "utf8",
  }));
  if (installed !== latest) {
    console.error(`${name} is locked to ${installed}. Upgrade to ${latest}.`);
    process.exitCode = 1;
  }
  return installed;
});

if (versions[0] !== versions[1]) {
  console.error("React and React DOM must resolve to the same version.");
  process.exitCode = 1;
}
NODE
```

The CI runner needs npm registry access. The peer range lets musae declare which versions it supports, and this check enforces the rolling latest-version policy in each consuming application. When npm publishes a new React major, upgrade musae to a release that supports it before updating React.

## Theme transition boundary

Place one top-level `ThemeProvider` around the application. It renders a viewport-height `div[data-musae-theme]` and manages the document's background and color scheme. Move flex or grid rules that target the app root's direct children onto the shell if the extra element changes the layout. Include any page-level chrome that should appear in the reveal inside the provider. Align the shell to the viewport, including resetting the host page's default body margin if applicable.

If you use `ConfigProvider`, nest it under `ThemeProvider` so the notification and message holders are inside the theme boundary:

```tsx
<ThemeProvider>
  <ConfigProvider>
    <App />
  </ConfigProvider>
</ThemeProvider>
```

Default musae portals render inside the nearest provider's shell. An explicit portal container still wins. Keep external portal containers (including those used by other libraries) inside the shell when they need to appear in the reveal. Portals outside the shell still update their theme when they consume the theme context, and their pixels may switch independently. The animated shell can also cover an overlapping external portal while the animation runs.

`useTheme().toggle(event?, { duration })` returns the requested mode immediately. Use `useTheme().mode` to read the committed mode. Pass the click event to reveal from the pointer location. Pass `{ duration: 0 }` to switch without animation. Browsers without the required View Transition support and users with reduced motion still get the theme change.
