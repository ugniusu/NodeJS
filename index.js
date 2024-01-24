// Kaip pasiimti duomenis is Backend

const getObject = () => {
  fetch("http://localhost:5000/cia/yra/mano/route", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      return response.json();
    })
    .then((prod) => {
      console.log(prod);
    })
    .catch((error) => {
      console.error(error.message);
    });
  //   console.log(result);

  //   const data = await result.json();
  //   console.log(data);
};

getObject();
