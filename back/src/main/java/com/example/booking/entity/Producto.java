package com.example.booking.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Imagen> imagenes;

    @ManyToOne
    @JoinColumn(name="idcategorias")
    private Categoria categoria;

    @Column(name="disponibilidad")
    private String disponibilidad;

    @Column(name="politicas")
    private String politicas;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "caracteristicas_has_productos",
            joinColumns = @JoinColumn(name = "idproductos"),
            inverseJoinColumns = @JoinColumn(name = "idcaracteristicas")
    )
    private Set<Caracteristica> caracteristicas;


    @ManyToOne
    @JoinColumn(name="idciudades")
    private Ciudad ciudad;

    public Producto (String titulo, String ubicacion, String descripcion,  Categoria categoria, String disponibilidad, String politicas){
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.disponibilidad = disponibilidad;
        this.politicas = politicas;
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
