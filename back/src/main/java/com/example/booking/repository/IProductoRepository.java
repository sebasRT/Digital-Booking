package com.example.booking.repository;

import com.example.booking.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Long> {
    //Consultar productos por id de ciudad
    @Query("SELECT p FROM Producto p WHERE p.ciudad.idciudades = ?1")
    List<Producto> findByIdCiudad(Long idciudad);

}
