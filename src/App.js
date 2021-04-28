import React from "react";
import faker from "faker";

import { MyTable } from "./components/MyTable";

const list = new Array(1001).fill(true).map(() => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  random_number_one: `${(faker.datatype.float() / 1000).toFixed(3)}%`,
  random_number_two: `${faker.datatype.number()}pc.`,
  random_number_three: `${parseInt(faker.commerce.price(), 10)}.00$`,
  random: faker.random.alphaNumeric(),
  date: faker.date.past(),
  zip_code: faker.address.zipCode(),
  city: faker.address.city(),
  street_name: faker.address.streetName(),
  street_adress: faker.address.streetAddress(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
  phone_number: faker.phone.phoneNumber(),
  domain_name: faker.internet.domainName(),
  domain_word: faker.internet.domainWord(),
  ip: faker.internet.ip(),
  color: faker.internet.color(),
  suffixes: faker.company.suffixes(),
  company_name: faker.company.companyName(),
  slogan: faker.company.catchPhrase(),
  bs: faker.company.bs(),
  words: faker.lorem.word(),
  fuel: faker.vehicle.fuel(),
  password: faker.internet.password(),
  random_number_five: `${faker.datatype.number()}pc.`,
  manufacturer: faker.vehicle.manufacturer(),
  vehicle: faker.vehicle.vehicle(),
  model: faker.vehicle.model(),
  future: faker.date.future(),
  file_name: faker.system.fileName(),
  vin: faker.vehicle.vin(),
  credit_card_number: faker.finance.creditCardNumber(),
  user_card: faker.vehicle.vrm(),
  product: faker.commerce.product(),
  time_zone: faker.address.timeZone(),
}));

export default function App() {
  return <MyTable list={list} />;
}
