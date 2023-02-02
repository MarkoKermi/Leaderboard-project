const getScore = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BoVHwANB8Q9NBL0jQxrd/scores/"
  );
  const endScore = await response.json();
  return endScore.result;
};

export default getScore;
