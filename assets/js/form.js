var form = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "votre message à bien été envoyé";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        status.innerHTML =
                            "il y a eu un problème lors de la soumission de votre formulaire";
                    }
                });
            }
        })
        .catch((error) => {
            status.innerHTML =
                "il y a eu un problème lors de la soumission de votre formulaire";
        });
}
form.addEventListener("submit", handleSubmit);
