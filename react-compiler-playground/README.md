# React v19 Compiler Playground

## How to get started

```
pnpm run dev
```

## Manual steps to setup react compiler

### dependencies

```sh
pnpm install --save react@19.0.0-rc-3f1436cca1-20240516 react-dom@19.0.0-rc-3f1436cca1-20240516
```

### devDependencies

```sh
pnpm install --save-dev eslint-plugin-react-compiler babel-plugin-react-compiler
```

### Configure the babel plugin

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // Comment this line to see the difference in the example
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
```

### Example

we want to see how the compiler effects slow components. Imagine any component in your project that is complicated to render. We're simulating this by creating a syncronous blocking helper:

```typescript
const sleep = (milliSeconds: number) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
};
```

and use that to simulate a compute intensive component

```typescript
const ComputeIntensive = () => {
  sleep(2000);
  return <div>I'm a very slow component</div>;
};
```

Check `App.tsx` how this component is used. You can observe, when disabling the `babel-plugin-react-compiler`, every click on the counter button takes 2sec. You might wonder why as we've configured 1000ms in our `sleep` function. In dev mode, ([react runs your code twice to find impurity early](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development)).

With `babel-plugin-react-compiler` enabled, it takes 2sec to render only initially, and then every click on the button uses the automatically cached component. NICE!!!
