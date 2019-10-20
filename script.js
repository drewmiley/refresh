const refresh = (textToFind, logTime = false) => {
    const start = logTime ? Date.now() : null;
    let refreshes = 1;
    location.reload();

    window.onload = function() {
        refreshes++;
        if (!document.body.innerText.includes(textToFind)) {
            location.reload();
        }
    }

    const end = logTime ? Date.now() : null;
    if (logTime) {
        console.log(`Time taken in seconds: ${ Math.ceil((end - start) / 1000) }`)
        console.log(`Total refreshes: ${ refreshes }`)
    }
}
