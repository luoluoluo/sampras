import citys from "./xizang-citys.json" assert { type: "json" };
import areas from "./xizang-areas.json" assert { type: "json" };
import streets from "./xizang-streets.json" assert { type: "json" };
import fs from "fs";

const data = citys.map(c => {
  return {
    label: c.name,
    value: c.name,
    children: areas
      .filter(a => a.city === c.name)
      .map(a => {
        return {
          label: a.name,
          value: a.name,
          children: streets
            .filter(s => s.area === a.name)
            .map(s => {
              return {
                label: s.name,
                value: s.name
              };
            })
        };
      })
  };
});

const content = JSON.stringify(data);

fs.writeFile("./xizang-street-options.json", content, () => {});
console.log(data);
