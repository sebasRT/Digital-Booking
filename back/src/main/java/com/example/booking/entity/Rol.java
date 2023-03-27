package com.example.booking.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idroles;


    @Column(name = "nombre")
    private RolNombre nombre;


    public Rol(RolNombre nombre) {
        this.nombre = nombre;
    }

    public Rol() {

    }


    public RolNombre getNombre() {
        return nombre;
    }
}
