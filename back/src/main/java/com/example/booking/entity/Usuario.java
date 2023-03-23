package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="usuarios")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario {
    @Id
    @Column(name="idusuarios")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idusuario;
    @Column
    @NonNull
    private String nombre;

}