package com.example.booking.DTO;

import com.example.booking.entity.Producto;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
public class ImagenDTO {

    private long idimagenes;

    private String titulo;

    @NotEmpty(message = "No puede estar vacío")
    @Size(min=10, message = "La descripción no puede tener menos de diez caracteres")
    private String url;

    private Producto producto;

    public ImagenDTO(String titulo, String url, Producto producto) {
        this.titulo = titulo;
        this.url = url;
        this.producto = producto;
    }
}
