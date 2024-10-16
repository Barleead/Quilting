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
  })
  .catch((error) => {
    // errors? here
    console.error(error);
  });
