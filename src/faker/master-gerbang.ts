import { fakerID_ID as faker } from "@faker-js/faker";

export function CreateRandomGerbang() {
  return {
    ruas: faker.animal.petName(),
    gerbang: faker.animal.petName(),
  };
}

const data = faker.helpers.multiple(CreateRandomGerbang, {
  count: 100,
});

export const dataGerbang = data;
