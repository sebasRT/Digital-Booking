package com.example.booking.DTO;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class CaracteristicaDTO {

    private long idcaracteristicas;

    private String icono;

    @NotEmpty(message = "No puede estar vacío")
    private String imagen;
}
