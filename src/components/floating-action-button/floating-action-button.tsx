import React from "react";
import { DndContext } from "@dnd-kit/core";
import { Button } from "../button";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  floating: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
  },

  collapsable: {
    transform: "",

    ":hover": {
      transform: "scale(1.1)",
    },
  },
});

const FloatingActionButton = () => {
  return (
    <DndContext>
      <Button></Button>
    </DndContext>
  );
};

export default FloatingActionButton;
