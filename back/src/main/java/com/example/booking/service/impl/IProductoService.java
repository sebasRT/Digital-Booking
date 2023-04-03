package com.example.booking.service.impl;

import com.example.booking.DTO.ProductoDTO;

public interface IProductoService extends IBasicCrudService<ProductoDTO> {
    //Metodos adicionales
    //Productos Aleatorios
    Iterable findRandomProductos();

    Iterable<ProductoDTO> findByCiudadId(Long id);
}
