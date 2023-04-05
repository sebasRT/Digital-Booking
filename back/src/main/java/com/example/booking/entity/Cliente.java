package com.example.booking.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="clientes")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idclientes;

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

    @ManyToOne
    @JoinColumn(name="idusuarios")
    private Usuario usuario;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cliente cliente= (Cliente) o;
        return idclientes == cliente.idclientes;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

}
