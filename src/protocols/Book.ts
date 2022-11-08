type Book = {
  title: string;
  author: string;
  genre: string;
  status?: boolean;
};

type BookUpdate = {
  title: string;
  status: boolean;
};

export { Book, BookUpdate };
