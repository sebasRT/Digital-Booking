package com.example.booking.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idproductos;

    @Column(name="titulo")
    private String titulo;

    @Column(name="ubicacion")
    private String ubicacion;

    @Column(name="descripcion")
    private String descripcion;

    @Column(name="imagen")
    private String imagen;

    @Column(name="categoria")
    private String categoria;

    @Column(name="disponibilidad")
    private String disponibilidad;

    @Column(name="politicas")
    private String politicas;

    public Producto (String titulo, String ubicacion, String descripcion, String imagen, String categoria, String disponibilidad, String politicas){
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.categoria = categoria;
        this.disponibilidad = disponibilidad;
        this.politicas = politicas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return idproductos == producto.idproductos;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }


}
