declare module "react" {
  interface CSSProperties {
    // 允许`CSS`自定义变量
    [$$Key$$: `--${string}`]: string | number | undefined;
  }
}

export {};
