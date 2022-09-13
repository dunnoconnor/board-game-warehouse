const regeneratorRuntime = require("regenerator-runtime");
const {db, Game} = require('./index');

const testData = [
    {
        title: "Dune",
        year: 2019,
        image: "https://cf.geekdo-images.com/2fgPg6Be--w97zoycObUgg__imagepage/img/JgN9-x6RiFr_vjMNxfDUOWNR9vM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4815198.jpg",
        rating: 8.0,
        price: 37.99,
        description: "Wildly different factions vie for control of Arrakis through alliance and treachery.",
        stock: 20,
    },
  ];
  
  describe(Game, () => {
    
    beforeAll(async () => {
        try {
            await db.sync({ force: true });
        } catch (error) {
            console.error(error);
        }
    });
  
    test("can create game", async () => {
      const instance = await Game.create(testData[0]);
      expect(instance instanceof Game);
      expect(instance.id).toBe(1);
      for (const key in testData[0]) {
        expect(instance[key]).toBe(testData[0][key]);
      }
    });
  
    test("has year", async () => {
      const instances = await Game.findAll();
      const { year } = instances[0];
      expect(year).toEqual(2019);
    });
  
    test("has price", async () => {
      const instances = await Game.findAll();
      const { price } = instances[0];
      expect(price).toEqual(37.99);
    });
  });