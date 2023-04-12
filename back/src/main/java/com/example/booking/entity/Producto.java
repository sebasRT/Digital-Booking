package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="productos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idproductos;

    @Column(name="titulo")
    private String titulo;

    @Column(name="ubicacion")
    private String ubicacion;

    @Column(name="descripcion")
    private String descripcion;

    @Column(name="imagen_principal")
    private String imagenPrincipal;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private List<Imagen> imagenes;

    @ManyToOne
    @JoinColumn(name="idcategorias")
    private Categoria categoria;

    @Column(name="disponibilidad")
    private String disponibilidad;

    @Column(name="politicas")
    private String politicas;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "caracteristicas_has_productos",
            joinColumns = @JoinColumn(name = "idproductos"),
            inverseJoinColumns = @JoinColumn(name = "idcaracteristicas")
    )
    private Set<Caracteristica> caracteristicas;


    @ManyToOne
    @JoinColumn(name="idciudades")
    private Ciudad ciudad;

    @Column(name="latitud")
    private String latitud;

    @Column(name="longitud")
    private String longitud;

    public Producto (String titulo, String ubicacion, String descripcion,  Categoria categoria, String disponibilidad, String politicas, String latitud, String longitud) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.politicas = politicas;
        this.latitud = latitud;
        this.longitud = longitud;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return idproductos == producto.idproductos;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }


}
