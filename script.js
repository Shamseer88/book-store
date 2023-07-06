const books = [
    {
        id: 1,
        title: 'To kill a mocking bird',
        img: 'toKillAMockingBird.png',
        category: 'Novel',
        author: 'Harper Lee',
        summary: 'To Kill a Mockingbird was published July 11, 1960, and it immediately became a literature classic. The novel discusses racism in the American South through the perspective of a clever young girl named Jean Louise Finch. The novel features some iconic characters, most notably the sympathetic and just lawyer ‘Atticus Finch’ who changed people’s perspectives and served as role models at a time in the United States when tensions regarding race were high.'
    },{
        id: 2,
        title: 'The Great Gatsby',
        img: 'theGreatGatsby.jpg',
        category: 'Novel',
        author: 'F. Scott Fitzgerald',
        summary: 'The novel follows a young man (Nick Carraway) who recently moved to New York City and is befriended by an eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The novel criticizes the idea of the “American Dream” and provides an insider’s look into the Jazz Age of the 1920s in United States history.'
    },
    {
        id: 3,
        title: 'Ulysses',
        img: 'ulysses.jpg',
        category: 'Novel',
        author: 'James Joyce',
        summary: 'The novel has three central characters, Leopold Bloom, Stephen Dedalus, and Molly who are intended to be modern counterparts of Ulysses, Telemachus, and Penelope respectively. All the events and activities that make up the plot takes place on a single day and in and immediately around Dublin.'
    },
    {
        id: 4,
        title: 'The Catcher in the Rye',
        img: 'TheCatcherInTheRye.jpg',
        category: 'Novel',
        author: 'J. D Salinger',
        summary: 'The center theme of this classic novel is the “loss of innocence.” The protagonist, Holden, wants to be the “catcher in the rye” -a person who saves children from falling off a cliff. This is a metaphor for entering into adulthood. The name Holden is also significant as it can be read as “hold on.” Holden’s wish is to remain innocent and true in a world full of “phonies” as he puts it.'
    },
    {
        id: 5,
        title: 'Pride and Prejudice',
        img: 'prideAndPrejudice.jpg',
        category: 'Novel',
        author: 'Jane Austen',
        summary: 'The book takes us into the Regency era in Great Britain, and its humor lies in Jane Austen’s honest depiction of manners, marriage, education, and money during this period. Austen portrayed that world in all pride and prejudice, with unwavering accuracy and satire.'
    },
    {
        id: 6,
        title: 'Adventures of Huckleberry Finn',
        img: 'adventuresOfHuckle.jpg',
        category: 'Novel',
        author: 'Mark Twain',
        summary: 'Huck, the novel’s central character and narrator runs away from his abusive father, together with his companion, Jim the runaway slave. Both of them make a long and repeatedly interrupted journey down the Mississippi River in a raft. During the journey, Huck comes in contact with different characters and types in whom the book memorably portrays almost every class living on or along the river.'
    },
    {
        id: 7,
        title: 'Alice’s Adventure in Wonderland',
        img: 'aliceInWonderland.jpg',
        category: 'Novel',
        author: 'Lewis Carroll',
        summary: 'The story centers around a young girl named Alice, who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole. She has many astonishing, often extraordinary adventures with thoroughly illogical and strange creatures. Alice often changes in size unexpectedly as she grows as tall as a house and shrinks to 3 inches in another part of the book.'
    },
    {
        id: 8,
        title: 'To the Lighthouse',
        img: 'toTheLightHouse.jpg',
        category: 'Novel',
        author: 'Virginia Woolf',
        summary: 'The novel includes little dialogues and almost no direct action; instead, most of the book is written as thoughts and observation. “To the Lighthouse” is often cited as an example of the literary technique of multiple focalizations. The book follows and extends the tradition of modernist novelists like James Joyce and Marcel Proust.'
    }
];

console.log(books);
const bookSection = document.querySelector('.books-section');




// const author = document.createElement('p');
// author.className = 'author';

books.forEach(function(book) {
    const singleBook = document.createElement('div');
    singleBook.classList = 'books';
    bookSection.appendChild(singleBook);

    const img = document.createElement('img');
    img.className = 'book-cover';
    img.src = book.img;
    singleBook.appendChild(img)

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = book.title;
    singleBook.appendChild(title);

    const category = document.createElement('p');
    category.className = 'category';
    category.innerHTML = `<p class="category"><i class="fas fa-book"></i> ${book.category}</p>`;
    singleBook.appendChild(category);

    const author = document.createElement('p');
    author.className = 'author';
    author.innerHTML = `<p class="category"><i class="fas fa-user"></i> ${book.author}</p>`;
    singleBook.appendChild(author);
})
