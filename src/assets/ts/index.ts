const submit = document.getElementById("paste__submit");
if (submit) {
    submit.addEventListener("click", () => {
        const paste = document.getElementById("paste");
        const title = document.getElementById("paste__title");
        const requestProperties = {
            body: JSON.stringify({
                content: paste ? (paste as HTMLInputElement).value : "",
                title: title ? (title as HTMLInputElement).value : "",
            }),
            headers: {
                "content-type": "application/json; charset=utf-8",
            },
            method: "POST",
        };
        fetch("/", requestProperties)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error(resp.statusText);
            })
            .then(resp => {
                console.log(resp);
                window.location.replace(`/${resp.paste_id}`);
            })
            .catch(err => {
                console.log(err);
            });
    });
}
