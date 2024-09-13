import { fromFile, type Font } from "@capsizecss/unpack";

let steelfish: Font | null = null;
if (import.meta.server) {
  steelfish = await fromFile("public/fonts/steelfish rg.otf");
}

export const useCapsizeCss = () => {
  return useState("capsizecss", () => ({
    steelfish,
  }));
};
