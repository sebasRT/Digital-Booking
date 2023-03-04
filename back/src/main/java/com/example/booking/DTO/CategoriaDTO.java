package com.example.booking.DTO;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CategoriaDTO {

    private long idcategorias;

    @NotEmpty(message = "No puede estar vacío")
    @Size(min=2, message = "El título no puede tener menos de dos caracteres")
    private String titulo;

    private String descripcion;

    private String url_imagen;
}
