package com.example.booking.repository;

import com.example.booking.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository extends JpaRepository<Producto,Long> {
    //Contiene lo crud de la base de datos
}
