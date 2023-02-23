const mp = require("../usecases/payment");

module.exports = {
  process: async (req, res) => {
    try {
      let items = [
        {
          id: "MLA111111",
          title: "Product 1",
          description: "Product 1 description",
          picture_url: "https://via.placeholder.com/150x150",
          quantity: 1,
          currency_id: "ARS",
          unit_price: 100,
        },
        {
          id: "MLA222222",
          title: "Product 2",
          description: "Product 2 description",
          picture_url: "https://via.placeholder.com/150x150",
          quantity: 2,
          currency_id: "ARS",
          unit_price: 200,
        },
      ];
      let link = await mp(items, 1, 0);
      return res.send(link.body);
    } catch (error) {
      return res.send(error);
    }
  },
  feedback: (req, res) => {
    return res.send(req.query);
  },
};
