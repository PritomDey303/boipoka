import { Book } from "@/interfaces/interface";
import { books } from "./books";

export function getRelatedBooks(currentBook: Book | undefined) {
    // Filter by category and exclude current book
    const filtered = books.filter(
        (book) => book.category === currentBook?.category && book.id !== currentBook?.id
    );

    // Shuffle and return 'count' number of books
    return shuffleArray(filtered).slice(0, 3);
}

function shuffleArray(array: Book[]) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}