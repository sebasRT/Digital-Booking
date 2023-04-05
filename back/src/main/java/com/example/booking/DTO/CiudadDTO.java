package com.example.booking.DTO;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
public class CiudadDTO {

    private long idciudades;

    @NotEmpty(message = "No puede estar vacío")
    @Size(min=3, message = "El nombre no puede tener menos de tres caracteres")
    private String nombre;
}
