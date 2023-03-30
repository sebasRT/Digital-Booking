package com.example.booking.DTO;

import com.example.booking.entity.Caracteristica;
import com.example.booking.entity.Categoria;
import com.example.booking.entity.Ciudad;
import com.example.booking.entity.Imagen;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.List;
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

    private String imagenPrincipal;

    private List<Imagen> imagenes;

    private Categoria categoria;

    @NotEmpty(message = "La disponibilidad no puede estar vacía")
    @Size(min=2, message = "La disponibilidad no puede tener menos de dos caracteres")
    private String disponibilidad;

    @NotEmpty(message = "Las políticas no pueden estar vacías")
    @Size(min=10, message = "Las políticas no pueden tener menos de diez caracteres")
    private String politicas;

    private Set<Caracteristica> caracteristicas;

    private Ciudad ciudad;


    public ProductoDTO(String titulo, String ubicacion, String descripcion, String imagenPrincipal, List<Imagen> imagenes, Categoria categoria, String disponibilidad, String politicas, Set<Caracteristica> caracteristicas, Ciudad ciudad) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.imagenPrincipal = imagenPrincipal;
        this.imagenes = imagenes;
        this.categoria = categoria;
        this.disponibilidad = disponibilidad;
        this.politicas = politicas;
        this.caracteristicas = caracteristicas;
        this.ciudad = ciudad;
    }
}
