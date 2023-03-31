package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name="reservas")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idreservas;

    @Column(name="hora_inicio")
    private String hora_inicio;

    @Column(name="fecha_inicio")
    private String fecha_inicio;

    @Column(name="fecha_fin")
    private String fecha_fin;

    @ManyToOne
    @JoinColumn(name="idusuarios")
    private Usuario idusuario;

    @ManyToOne
    @JoinColumn(name="idproductos")
    private Producto idproducto;
}
