import { lazy } from "react";

export const Start = lazy(() => import("./Start/Start"));
export const SinglePlayer = lazy(() => import("./singleplayer/singleplayer"));
export const MultiPlayer = lazy(() => import("./multiplayer/multiplayer"));
