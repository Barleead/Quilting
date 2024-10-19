fetch("https://randomfox.ca/floof/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("API not fluffed");
    }
  })
  .then((data) => {
    // Process the response data here

    const foxImage = document.createElement("img");
    foxImage.src = data.image;
    foxImage.alt = "Random Fox Image";
    document.getElementById("API-container").appendChild(foxImage);
  })
  .catch((error) => {
    // errors? here
    console.error(error);
    document.getElementById("API-container").innerHTML = (
      <p>Didn't Load: ${error.message}</p>
    );
  });
