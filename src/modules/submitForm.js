const userScore = async () => {
  const nameValue = document.querySelector("#your_name").value;
  const scoreValue = document.querySelector("#your_score").value;

  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BoVHwANB8Q9NBL0jQxrd/scores/",
    {
      method: "POST",
      body: JSON.stringify({
        user: document.querySelector("#your_name").value,
        score: document.querySelector("#your_score").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const postedScore = await response.json();
  return postedScore;
};

export default userScore;
