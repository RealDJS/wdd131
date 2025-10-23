const articles = [
   {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
         "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "****",
   },
   {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
         "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
         "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐",
   },
   {
      id: 3,
      title: "Belgariad Book One: Pawn of Prophecy",
      date: "Feb 12, 2022",
      description:
         "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
      imgSrc:
         "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
      imgAlt: "Book cover for Pawn of Prophecy",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐⭐",
   },
];

// make new elements
function createElement(tag, className = 0, content = 0) {
   const element = document.createElement(tag);
   if (className) {
      element.classList.add(className);
   }
   if (content) {
      element.textContent = content;
   }
   return element;
}

// add the book's meta data
function createMetaData(article) {
   const meta_data = createElement("div", "review-meta-data");

   // time
   const timeP = createElement("p");
   const dateTime = document.createElement("time");
   dateTime.textContent = article.date;
   timeP.appendChild(dateTime);

   // rest of meta elements
   const age = createElement("p", "age", article.ages);
   const genre = createElement("p", "genre", article.genre);
   const rating = createElement("p", "rating", article.stars);

   meta_data.append(timeP, age, genre, rating);
   return meta_data;
}

// create the review content
function createContent(article) {
   const review_cont = createElement("div", "review-content");

   // title
   const book_name = createElement("h2", "book-name", article.title);

   // cover
   const book_cover = createElement("img");
   book_cover.src = article.imgSrc;
   book_cover.alt = article.imgAlt;

   // summary
   const summary = createElement("p", "summary", article.description);
   const reviewPage = createElement("a", "review-link", "Read More...");
   reviewPage.href = "#";
   summary.appendChild(reviewPage);

   // put everything together
   review_cont.append(book_name, book_cover, summary);

   return review_cont;
}

// Create Articles
function createArticle(article) {
   // create article
   const newArticle = document.createElement("article");

   // add meta-data
   const meta_data = createMetaData(article);

   // add review content
   const review_cont = createContent(article);

   // REVIEWS
   newArticle.append(meta_data, review_cont);
   const reviews = document.getElementById("reviews");
   reviews.appendChild(newArticle);
}

articles.forEach((article) => createArticle(article));
