package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="caracteristicas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idcaracteristicas;

    @Column(name="icono")
    @Nullable
    private String icono;

    @Column(name="imagen")
    private String imagen;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Caracteristica caracteristica = (Caracteristica) o;
        return idcaracteristicas == caracteristica.idcaracteristicas;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
