package com.example.booking.repository;

import com.example.booking.entity.Producto;
import com.example.booking.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva,Long> {
    Collection<Reserva> findAllReservationsByUser(Long cliente_id);
    Collection<Reserva> findAllReservationsByProduct(Long producto_id);
    //Contiene lo crud de la base de datos
}
