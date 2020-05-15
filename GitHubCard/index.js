/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/stackpearson',
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell'
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createGitCards(apiData) {
  //declaring new elements
  const cardContainer = document.createElement('div')
  const cardImg = document.createElement('img')
  const card = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const cardUserP = document.createElement('p')
  const cardLocationP = document.createElement('p')
  const cardProfileP = document.createElement('p')
  const cardGitAddy = document.createElement('a')
  const cardFollowersP = document.createElement('p')
  const cardFollowingP = document.createElement('p')
  const cardBioP = document.createElement('p')

  //adding classes
  cardContainer.classList.add('card')
  card.classList.add('card-info')
  cardTitle.classList.add('name')
  cardUserP.classList.add('username')

  cardImg.src = apiData.avatar_url
  cardTitle.textContent = apiData.name
  cardUserP.textContent = apiData.login
  cardLocationP.textContent = apiData.cardLocationP
  cardGitAddy.setAttribute('href', apiData.html_url)
  cardGitAddy.textContent = apiData.html_url
  cardFollowersP.textContent = 'Followers: ' + apiData.followers
  cardFollowingP.textContent = 'Following: ' + apiData.following
  cardBioP.textContent = 'Bio: ' + apiData.bio
  console.log(apiData)

  // adding new elements to the dom
  cardContainer.append(cardImg, card)
  card.append(cardTitle, cardUserP, cardLocationP, cardProfileP, cardFollowersP, cardFollowingP, cardBioP)
  cardProfileP.append(cardGitAddy)

  return cardContainer
}

const mainCardHolder = document.querySelector('.cards')

axios.get('https://api.github.com/users/stackpearson')
.then(response => {
  console.log(response.data)
  mainCardHolder.append(createGitCards(response.data))
})

.catch(error => {
  console.log('ya goofed -->', error)
})








/* List of LS Instructors Github username's:
sawyer = 'https://api.github.com/users/stackpearson',
tetodan = 'https://api.github.com/users/tetondan',
dustinmyers = 'https://api.github.com/users/dustinmyers',
justsml = 'https://api.github.com/users/justsml',
luishrd = 'https://api.github.com/users/luishrd',
bigknell = 'https://api.github.com/users/bigknell'

  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
