package biblioteca.controller;

import biblioteca.entity.Book;
import biblioteca.repository.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller REST básico con persistencia.
 * Todavía NO usamos ResponseEntity (eso es la sesión 3).
 */
@RestController
@RequestMapping("/books")
public class BookController {
    private final BookRepository bookRepository;

    // Inyección por constructor (buena práctica)
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // READ all
    @GetMapping
    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    // READ by id
    @GetMapping("/{id}")
    public Book getById(@PathVariable Long id) {
        // AÚN frágil: lo mejoraremos en la sesión 3
        return bookRepository.findById(id).orElse(null);
    }

    // CREATE
    @PostMapping
    public Book create(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Book update(@PathVariable Long id, @RequestBody Book updated) {
        Book existing = bookRepository.findById(id).orElse(null);
        if (existing == null) {
            return null; // intencionalmente mal (para la siguiente sesión)
        }
        existing.setTitle(updated.getTitle());
        existing.setAuthor(updated.getAuthor());
        existing.setCategory(updated.getCategory());
        return bookRepository.save(existing);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }
}

