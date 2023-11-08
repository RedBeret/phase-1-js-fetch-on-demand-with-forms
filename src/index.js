const init = () => {

}

const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
        const movieDetails = document.querySelector("#movieDetails");

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                const title = document.createElement("h4");
                title.innerText = data.title;
                const summary = document.createElement("p");
                summary.innerText = data.summary;

                movieDetails.innerHTML = "";
                movieDetails.appendChild(title);
                movieDetails.appendChild(summary);
            })
            .catch((error) => {
                console.log(error);
                const errorMessage = document.createElement("p");
                errorMessage.innerText = "Movie not found!";
                movieDetails.innerHTML = "";
                movieDetails.appendChild(errorMessage);
            });
    });
};

document.addEventListener("DOMContentLoaded", init);
