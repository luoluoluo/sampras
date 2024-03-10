import citys from "./xizang-citys.json" assert { type: "json" };
import areas from "./xizang-areas.json" assert { type: "json" };
import fs from "fs";

const data = areas.map(v => {
  const city = citys.find(vv => vv.code === v.cityCode);
  return {
    name: v.name,
    city: city.name
  };
});

const content = JSON.stringify(data);

fs.writeFile("./xizang-areas.json", content, () => {});
console.log(data);
