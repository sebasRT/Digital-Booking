package com.example.booking.DTO;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
public class ProductoDTO {

    private long idproductos;

    @NotEmpty(message = "No puede estar vacío")
    @Size(min=2, message = "El título no puede tener menos de dos caracteres")
    private String titulo;

    @NotEmpty(message = "La ubicación no puede estar vacía")
    @Size(min=2, message = "La ubicación no puede tener menos de dos caracteres")
    private String ubicacion;

    private String descripcion;

    @NotEmpty(message = "La imagen no puede estar vacía y debe ser una URL")
    @Size(min=2, message = "La imagen no puede tener menos de dos caracteres")
    private String imagen;

    private String categoria;

    @NotEmpty(message = "La disponibilidad no puede estar vacía")
    @Size(min=2, message = "La disponibilidad no puede tener menos de dos caracteres")
    private String disponibilidad;

    @NotEmpty(message = "Las políticas no pueden estar vacías")
    @Size(min=10, message = "Las políticas no pueden tener menos de diez caracteres")
    private String politicas;


}
