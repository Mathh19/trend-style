import { faker } from '@faker-js/faker';

export const comments = Array.from({ length: 157 }).map(() => {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatarGitHub(),
    username: faker.person.firstName(),
    height: faker.number.int({ min: 150, max: 186 }),
    weight: faker.number.int({ min: 55, max: 100 }),
    rate: faker.number.float({ min: 1, max: 5 }),
    comment: faker.lorem.paragraphs({ min: 2, max: 4 }),
    productInfo: {
      size: faker.string.fromCharacters(['S', 'M', 'L', 'XL', 'XXL']),
      color: faker.string.fromCharacters(['Black', 'White'])
    }
  };
});
