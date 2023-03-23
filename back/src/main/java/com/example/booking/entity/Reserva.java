package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Set;

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

    @Column(name="horaComienzo")
    @NonNull
    private Date horaComienzo;

    @Column(name="fechaInicial")
    private Date fechaInicial;

    @Column(name="fechaFinal")
    private Date fechaFinal;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

}
