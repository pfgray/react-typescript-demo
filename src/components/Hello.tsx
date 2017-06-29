import * as React from "react";
import { Github } from "./Github";

export interface HelloProps {
  compiler: string,
  framework: string
};

export const Hello = (props: HelloProps) => (
  <div className="container">
    Hello from {props.compiler} and {props.framework}!
    <Github user="rektide" />
  </div>
);