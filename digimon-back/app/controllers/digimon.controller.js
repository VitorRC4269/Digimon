
exports.findName = async (req, res) => {
    
    const name = req.params.name;

    const api_url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
      const fetch_response = await fetch(api_url);
      const json = await fetch_response.json();
      res.json(json);

      
  };

  exports.findLevel = async (req, res) => {

    const level = req.params.level;

    const api_url = `https://digimon-api.vercel.app/api/digimon/level/${level}`;
      const fetch_response = await fetch(api_url);
      const json = await fetch_response.json();
      res.json(json);
  };