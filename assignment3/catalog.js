document.addEventListener("DOMContentLoaded", () => {
    const rollNumber = "26100142";
    const apiBaseUrl = "https://api.assignment3.rohanhussain.com/books/";

    // to fetch and display list of books
    const loadBooks = () => {
        fetch(`${apiBaseUrl}${rollNumber}`)
            .then(response => response.json())
            .then(data => {
                const bookList = document.getElementById("bookList");
                bookList.innerHTML = "";
                data.books.forEach(book => {
                    const bookItem = document.createElement("div");
                    bookItem.textContent = `${book.title} by ${book.author} - $${book.price}`;
                    bookList.appendChild(bookItem);
                });
            })
    };

    loadBooks();

    // handling form submission to add new book
    const addBookForm = document.getElementById("addBookForm");
    addBookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(addBookForm);

        fetch(`${apiBaseUrl}${rollNumber}`, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            loadBooks();  // reloading list of books after adding a new one
        })
    });
});
