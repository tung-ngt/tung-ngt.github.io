function input(message) {
    while (true) {
        const text = prompt(message);
        if (text) {
            const p = document.createElement("p");
            p.textContent = text
            document.body.appendChild(p);
            break;
        }
    }
}
