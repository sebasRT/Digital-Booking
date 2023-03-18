package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="usuarios")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idusuarios;

    @Column(name="nombre")
    @NotNull
    private String nombre;

    @Column(name="apellido")
    @NotNull
    private String apellido;

    @Column(name="email")
    @NotNull
    private String email;

    @Column(name="contrasena")
    @NotNull
    private String contrasena;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario= (Usuario) o;
        return idusuarios == usuario.idusuarios;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

}