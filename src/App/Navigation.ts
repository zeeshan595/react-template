import { HelloWorld } from "./HelloWorld/HelloWorld";

export interface Navigation {
  path: string;
  component: React.ComponentClass;
}

export const navigation: Navigation[] = [
  {
    path: "/",
    component: HelloWorld,
  },
];
