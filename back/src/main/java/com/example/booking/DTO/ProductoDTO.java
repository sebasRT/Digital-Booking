package com.example.booking.DTO;

import com.example.booking.entity.Caracteristica;
import com.example.booking.entity.Categoria;
import com.example.booking.entity.Ciudad;
import com.example.booking.entity.Imagen;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Set;

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

    private Set<Imagen> imagenes;

    private Categoria categoria;

    @NotEmpty(message = "La disponibilidad no puede estar vacía")
    @Size(min=2, message = "La disponibilidad no puede tener menos de dos caracteres")
    private String disponibilidad;

    @NotEmpty(message = "Las políticas no pueden estar vacías")
    @Size(min=10, message = "Las políticas no pueden tener menos de diez caracteres")
    private String politicas;

    private Set<Caracteristica> caracteristicas;

    private Ciudad ciudad;


}
