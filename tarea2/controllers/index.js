const BASE_URL = "https://66f1f329415379191552a2f1.mockapi.io/users";

export const userController = {
  getUser: async (req, res) => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  },
  createUser: async (req, res) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      const data = await response.json();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}