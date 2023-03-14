package com.example.booking.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="imagenes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idimagenes;

    @Column(name="titulo")
    private String titulo;

    @Column(name="url")
    private String url;

    @ManyToOne
    @JoinColumn(name="idproductos")
    private Producto producto;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Imagen imagen = (Imagen) o;
        return idimagenes == imagen.idimagenes;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
