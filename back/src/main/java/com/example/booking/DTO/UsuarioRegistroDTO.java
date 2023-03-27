package com.example.booking.DTO;

import com.example.booking.entity.Rol;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UsuarioRegistroDTO {

    private Long idusuario;
    private String nombre;
    private String apellido;
    private String email;
    private String password;

    private String ciudad;

    private Rol rol;

    public UsuarioRegistroDTO(Long idusuario, String nombre, String apellido, String email, String password, String ciudad, Rol rol) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.rol = rol;

    }

    public UsuarioRegistroDTO(String nombre, String apellido, String email, String password, String ciudad, Rol rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.ciudad = ciudad;
        this.rol = rol;
    }

    public UsuarioRegistroDTO(String email) {
        this.email = email;
    }

    public UsuarioRegistroDTO() {
    }

    //mostrar el nombre del rol
    public String getRolNombre() {
        return rol.getNombre().name();
    }
}
