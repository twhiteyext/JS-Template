import { StreamOutput } from "./data.ts";

export function GetLocationsPath(doc: StreamOutput) {
  return "location7-" + doc.locale + "-" + doc.id;
};

export function GetAboutPath(doc: StreamOutput) {
  return "about-" + doc.locale;
};
