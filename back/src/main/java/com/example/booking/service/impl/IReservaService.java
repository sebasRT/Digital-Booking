package com.example.booking.service.impl;

import com.example.booking.DTO.ReservaDTO;

public interface IReservaService extends IBasicCrudService<ReservaDTO> {

    Iterable<ReservaDTO> findByProductoId(Long id);
}
