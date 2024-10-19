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
    console.log(data);
    const foxImage = document.createElement("img");
    foxImage.setAttribute("src", data.image);
    foxImage.setAttribute("alt", "Random Fox Image");
    document.getElementById("API-container").appendChild(foxImage);
  })
  .catch((error) => {
    // errors? here
    console.error(error);
    document.getElementById("API-container").innerHTML =
      "Didn't Load: ${error.message}";
  });
  
const tipsTricks = ["a", "b", "c", "d"];
for (let i = 0; i < tipsTricks.length; i++) {
  console.log(tipsTricks[i]);

  const container = document.getElementById("tipsTricks")
}
