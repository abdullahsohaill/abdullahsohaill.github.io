document.addEventListener("DOMContentLoaded", () => {
    const rollNumber = "26100142";
    const apiBaseUrl = "https://api.assignment3.rohanhussain.com/books/search/";

    // handling the search button click
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        const query = document.getElementById("searchQuery").value;

        fetch(`${apiBaseUrl}${rollNumber}?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                const searchResults = document.getElementById("searchResults");
                searchResults.innerHTML = "";
                data.books.forEach(book => {
                    const resultItem = document.createElement("div");
                    resultItem.textContent = `${book.title} by ${book.author} - $${book.price}`;
                    searchResults.appendChild(resultItem);
                });
            })
    });
});
