const form = document.querySelector("#FormTweet")
const tweet = document.querySelector("#tweet")

form.addEventListener("submit", e =>{

})

const addTweet =  (username, tweet) => {
    const NewTweet = document.createElement("li")
    const UserB = document.createElement("b")
    UserB.append(username)
    NewTweet.append(UserB)
    NewTweet.append(`- ${tweet}`)
    tweet.append(NewTweet)
}