beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "Aloe", image: "aloe.png", price: 5 },
          { id: 2, name: "Cactus", image: "cactus.png", price: 10 },
        ]),
    })
  );
});

import './test_suites/AllPlants.test'
import './test_suites/CreatePlant.test'
import './test_suites/InStock.test'
import './test_suites/SearchPlants.test'