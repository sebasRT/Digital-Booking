package com.example.booking.segurity;

import com.example.booking.entity.Rol;
import com.example.booking.entity.RolNombre;
import com.example.booking.entity.Usuario;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@AllArgsConstructor
public class UserDetailsImpl implements UserDetails{

    private final Usuario usuario;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();
    }

    @Override
    public String getPassword() {
        return usuario.getPassword();
    }

    @Override
    public String getUsername() {
        return usuario.getEmail();
    }

    public String getApellido() {
        return usuario.getApellido();
    }

    public Long getId() {
        return usuario.getIdusuarios();
    }

    //rol del usuario
    public Rol getRol() {
        return usuario.getRol();
    }

    //mostrar el id del rol del usuario
    public Long getRolId() {
        return usuario.getRol().getIdroles();
    }

    //mostrar el nombre del rol del usuario
    public RolNombre getRolNombre() {
        return usuario.getRol().getNombre();
    }


    public String getCiudad() {
        return usuario.getCiudad();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getNombre() {
        return usuario.getNombre();
    }
}
