package com.example.booking.repository;


import com.example.booking.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoriaRepository extends JpaRepository<Categoria,Long> {
    //Contiene lo crud de la base de datos
}
