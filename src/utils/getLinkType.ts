export enum LinkTypes {
  INTERNAL = "internal",
  EXTERNAL = "external",
}

export const getLinkType = (
  link: string
): LinkTypes.EXTERNAL | LinkTypes.INTERNAL =>
  /^http.{1,2}\/\//.test(link) ? LinkTypes.EXTERNAL : LinkTypes.INTERNAL;
