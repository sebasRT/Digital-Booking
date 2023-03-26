package com.example.booking.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Data
@Table(name = "usuarios",uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class Usuario{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idusuarios;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "ciudad")
    private String ciudad;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "idroles")
    @Enumerated(EnumType.STRING)
    private Rol rol;

    public Usuario(Long idusuarios, String nombre, String apellido, String email, String password, String ciudad, Rol rol) {
        this.idusuarios = idusuarios;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.rol = rol;
    }

    public Usuario(String nombre, String apellido, String email, String password, String ciudad, Rol rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.rol = rol;
    }

    public Usuario() {
    }

}
