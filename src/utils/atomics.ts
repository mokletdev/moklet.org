import { randomFillSync } from "crypto";

//#region Date relateds
export function getMonthName(month: number) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[month];
}

export function stringifyDate(date: Date) {
  const year = date.getFullYear(),
    month = getMonthName(date.getMonth()),
    day = date.getDate();
  return `${month} ${day}, ${year}`;
}
//#endregion

//#region Pagination relateds
export function isInteger(value: string) {
  return /^\d+$/.test(value);
}

export function validatePage(page: string) {
  return isInteger(page) && parseInt(page) > 0;
}
//#endregion

export function generateRandomString(length: number): string {
  const buffer = Buffer.alloc(length);
  randomFillSync(buffer);

  return buffer.toString("base64").slice(0, length);
}

export const formToJSON = (elements: HTMLElement) =>
  [].reduce.call(
    elements,
    (data: any, element: HTMLInputElement) => {
      data[element.name] =
        element.type == "checkbox"
          ? data[element.name]
            ? [...data[element.name], element.value]
            : [element.value]
          : element.value;
      return data;
    },
    {},
  ) as Array<string | Array<string>>;
