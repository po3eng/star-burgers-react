import { SHOW_PRELOADER, HIDE_PRELOADER } from "../constants/preloader";

export interface IShowPreloader {
  readonly type: typeof SHOW_PRELOADER;
}
export interface IHidePreloader {
  readonly type: typeof HIDE_PRELOADER;
}

export type TPreloaderActions = IShowPreloader | IHidePreloader;

export const showPreloader = (): IShowPreloader => ({ type: SHOW_PRELOADER });
export const hidePreloader = (): IHidePreloader => ({ type: HIDE_PRELOADER });
