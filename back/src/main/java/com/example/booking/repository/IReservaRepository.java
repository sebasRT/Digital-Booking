package com.example.booking.repository;

import com.example.booking.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva, Long> {

    //Consultar reservas por id de producto
    @Query("SELECT r FROM Reserva r WHERE r.idproducto.idproductos = :idproducto")
    List<Reserva> findByIdproducto(Long idproducto);
}
