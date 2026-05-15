package biblioteca.repository;

import biblioteca.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * JpaRepository nos da:
 * - save
 * - findAll
 * - findById
 * - deleteById
 * sin escribir SQL
 */

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}