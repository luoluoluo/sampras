import streets from "./streets.json" assert { type: "json" };
import fs from "fs";
const data = streets.filter(v => v.provinceCode === "54");
const content = JSON.stringify(streets.filter(v => v.provinceCode === "54"));

fs.writeFile("./xizang-streets.json", content, () => {});
