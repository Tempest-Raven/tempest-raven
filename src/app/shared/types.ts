import { Type, ProviderToken } from "@angular/core";

export type elementComponent<T extends number | string = number | string> = { 
  elementId: T;
  addLink: boolean
}
export type elementListData<T extends number | string = number | string> = { 
  component: Type<elementComponent<T>>, 
  service: ProviderToken<requestService<T>> 
};
export type requestService<T extends number | string = number | string> = { 
  request: Promise<Map<T, {id: T}>>
}
export type pseudoBool = 0 | 1;
export type sonnyElement = "Physical" | "Magic" | "Ice" | "Fire" | "Lightning" | "Earth" | "Shadow" | "Poison";
export type sonnyLanguage = "ENGLISH" | "GERMAN";
export type languageObject = {
  [x in sonnyLanguage]: langData;
};
export type langData = Partial<{
  BUFFSAY: { [x: string]: string }
  ACH: string[],
  ACHDESC: string[],
  ACHSAY: string[],
  CUTSUB: string[],
  SYSTEM: string[],
  DEFTIP: string[],
  ZONES: string[],
  ZONES2: string[],
  NAVTITLE: string[],
  NAVTEXT: string[],
  NAVTITLE2: string[],
  NAVTEXT2: string[],
  MENU: string[],
  SHOP: string[],
  ELEMENTS: string[],
  VICTORY: string[],
  CLASS: string[],
  CLASSDESCRIPT: string[],
  SKILLNAME: string[],
  SKILLTIP: string[],
  SKILLTIP2: string[],
  SKILLTIP3: string[],
  AUN: string[],
  AUNX: string[],
  AU: string[],
  AUX1: string[],
  AUX2: string[],
  AUX3: string[],
  BATTLESPEECH: string[],
  ITEMNAME: string[],
  ITEMSAY: string[],
  ITEMSS: string[],
  GOTIP: string[],
  MANUAL: string[],
  MANUALEX: string[],
  //TODO: manually add the other missing entries
  [x: string]: string | string[] | { [x: string]: string }
}>;