export interface ThisProps {
  showHide: void;
}

type TSeans = {
  number: number;
  seans: string;
  title: string;
};
export type TSeansList = {
  id: number;
  day: string;
  seanses: TSeans[];
}[];

export const seans_Url = new URL(
  "https://639e05c83542a26130555cae.mockapi.io/IdSeanses"
);
seans_Url.searchParams.append("sortBy", "day");
seans_Url.searchParams.append("order", "desc"); // order parameter is optional and will default to `asc`

export const SeansesUrl =
  "https://639e05c83542a26130555cae.mockapi.io/IdSeanses";

export const FilmsUrl = "https://639e05c83542a26130555cae.mockapi.io/Films";
export const Films_Url_sorted = new URL(
  "https://639e05c83542a26130555cae.mockapi.io/Films"
);
Films_Url_sorted.searchParams.append("sortBy", "title");
Films_Url_sorted.searchParams.append("order", "asc"); // order parameter is optional and will default to `asc`

export function check_Length(param1: string, param2: number) {
  let res = false;
  res = param1.trim() !== "";
  res = res && param1.length >= param2;
  return res;
}

export function getNowDay() {
  let res: string = "2024-01-15";
  const Dt = new Date();
  let day = Dt.getDate();
  let tDay = day < 10 ? "0" + day : day;

  res = Dt.getFullYear() + "-" + Dt.getMonth() + 1 + "-" + tDay;

  return res;
}
