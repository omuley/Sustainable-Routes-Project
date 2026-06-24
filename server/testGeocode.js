import dotenv from "dotenv";
import { geocodeAddress } from "./services/geocodingService.js";
import { solarService } from "./services/solarService.js";
dotenv.config();

const coords = await geocodeAddress(
  "201 N. Goodwin Avenue, Urbana, Illinois 61801" //test w/ seibel school of cs
);

const lat = coords.lat
const long = coords.lng

console.log(lat);

const result = await solarService(lat, long);

console.log(result);