const button = document.getElementById("getQuote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const loading = document.getElementById("loading");




button.addEventListener("click", () => {

    loading.style.display = "block";
    button.disabled = true;

    fetch("https://dummyjson.com/quotes/random")
        .then(response => {
            
            if (!response.ok) {
                throw new Error("Ошибка сервера");
            }

            return response.json();
        })
        .then(data => {
            quote.textContent = `"${data.quote}"`;
            author.textContent = `— ${data.author}`;
        })
        .catch(error => {
            quote.textContent = "Не удалось загрузить цитату.";
            author.textContent = "Попробуйте позже.";
        })
        .finally(() => {
            loading.style.display = "none";
            button.disabled = false;
        });

});