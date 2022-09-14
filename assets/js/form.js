var form = document.getElementById("form");

async function handleSubmit(event) {
    event.preventDefault();
    var success = document.getElementById("success");
    if (success.length != 0) {
        success.innerHTML = "";
    }
    var unsuccess = document.getElementById("unsuccess");
    if (unsuccess.length != 0) {
        unsuccess.innerHTML = "";
    }
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
                success.innerHTML = "Votre message à bien été envoyé !";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        unsuccess.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        unsuccess.innerHTML =
                            "Il y a eu un problème lors de la soumission de votre formulaire";
                    }
                });
            }
        })
        .catch((error) => {
            unsuccess.innerHTML =
                "Il y a eu un problème lors de la soumission de votre formulaire";
        });
}
form.addEventListener("submit", handleSubmit);
