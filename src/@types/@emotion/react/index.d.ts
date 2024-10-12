import "@emotion/reacct";

declare module "@emotion/react" {
  interface Theme {
    backgroundColor: string;
    oppositeColor: string;
    boxColor: string;
    borderColor: string;
    boxBorderColor: string;
  }
}
