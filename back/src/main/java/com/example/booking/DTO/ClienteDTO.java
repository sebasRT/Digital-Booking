package com.example.booking.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class ClienteDTO {
        private long idclientes;

        @NotEmpty(message = "No puede estar vacío")
        @Size(min=3, message = "El nombre no puede tener menos de tres caracteres")
        private String nombre;

        @NotEmpty(message = "El apellido no puede estar vacía")
        @Size(min=3, message = "El apellido no puede tener menos de tres caracteres")
        private String apellido;

        @NotEmpty(message = "La contrasena no puede estar vacía")
        @Size(min=6, message = "La contrasena no puede tener menos de 6 caracteres")
        private String contrasena;

        @NotEmpty(message = "El email no puede estar vacio")
        @Size(min=6, message = "El email no puede estar vacio")
        private String email;

        private UsuarioDTO usuario;
}
