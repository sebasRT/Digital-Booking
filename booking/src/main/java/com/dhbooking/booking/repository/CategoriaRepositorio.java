package com.dhbooking.booking.repository;

import com.dhbooking.booking.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepositorio extends JpaRepository<Categoria,Long> {
    //Contiene lo crud de la base de datos

}
