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
@Table(name="ciudades")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Ciudad {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idciudades;

    @Column(name="nombre")
    @NotNull
    private String nombre;

    @Column(name="direccion")
    @NotNull
    private String direccion;

    @Column(name="barrio")
    @NotNull
    private String barrio;


    @OneToMany(mappedBy = "ciudad", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Producto> productos;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ciudad ciudad = (Ciudad) o;
        return idciudades == ciudad.idciudades;
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

}
