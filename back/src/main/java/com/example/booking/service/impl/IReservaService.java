package com.example.booking.service.impl;

import com.example.booking.DTO.ReservaCompletaDTO;
import com.example.booking.DTO.ReservaDTO;

import java.util.List;

public interface IReservaService extends IBasicCrudService<ReservaDTO> {
    ReservaDTO save(ReservaDTO reservaDTO);

    List<ReservaDTO> findAllReservationsByProduct(Long producto_id);

    List<ReservaCompletaDTO> findAllReservationsByUser(Long cliente_id);
}
