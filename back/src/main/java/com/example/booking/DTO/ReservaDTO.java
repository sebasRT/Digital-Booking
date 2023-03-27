package com.example.booking.DTO;

import com.example.booking.entity.Producto;
import com.example.booking.entity.Usuario;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReservaDTO {

    private long idreservas;

    private String hora_inicio;

    private String fecha_inicio;

    private String fecha_fin;

    private Usuario idusuario;

    private Producto idproducto;
}
