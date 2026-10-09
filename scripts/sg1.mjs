import fs from "node:fs";
import { rowsToBusinesses, getPlace } from "./sg-lib.mjs";
const row = JSON.parse(fs.readFileSync("/home/user/work/row.json","utf8"));
const [b] = rowsToBusinesses([row]);
const pl = await getPlace(b);
fs.writeFileSync("/home/user/work/biz.json", JSON.stringify({ b, place: pl?.place || null, matched: !!pl?.matched }));
console.log(JSON.stringify({ slug: b.slug, name: b.name, city: b.city, matched: !!pl?.matched, photos: (pl?.place?.photos || []).length, phone: b.phone || pl?.place?.internationalPhoneNumber || "" }));
