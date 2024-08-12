function deleteTweet(e) {
    const clickedButton = e.target;
    clickedButton.parentElement.remove();
}

function tweetHandler() {
    const newTweetInput = document.getElementById("new-tweet-input");
    const newTweet = newTweetInput.value.trim();

    if (newTweet) {
        const newListItem = document.createElement("li");
        newListItem.innerText = newTweet;
        newListItem.classList = "list-group-item d-flex justify-content-between align-items-center mb-2";

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove Post";
        deleteButton.classList = "btn btn-danger btn-sm";
        deleteButton.addEventListener("click", function() {
            newListItem.remove();
        });

        newListItem.appendChild(deleteButton);

        const tweetList = document.getElementById("tweet-list");
        tweetList.prepend(newListItem);

        newTweetInput.value = "";
    }
}

document.getElementById("tweet-btn").addEventListener("click", tweetHandler);
