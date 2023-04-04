package com.example.booking.service;

import com.example.booking.DTO.UsuarioRegistroDTO;
import com.example.booking.entity.Rol;
import com.example.booking.entity.RolNombre;
import com.example.booking.entity.Usuario;
import com.example.booking.repository.IUsuarioRepository;
import com.example.booking.service.impl.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService {
    
    @Autowired
    private IUsuarioRepository usuarioRepository;
    
    @Override
    public Usuario save(UsuarioRegistroDTO usuario) {

        Usuario usuarioEntity = new Usuario();
        usuarioEntity.setNombre(usuario.getNombre());
        usuarioEntity.setApellido(usuario.getApellido());
        usuarioEntity.setPassword(new BCryptPasswordEncoder().encode(usuario.getPassword()));
        usuarioEntity.setEmail(usuario.getEmail());
        usuarioEntity.setCiudad(usuario.getCiudad());
        //si el rol es ROLE_ADMIN, se le asigna el rol de administrador
        if (usuario.getRolNombre().equals(RolNombre.ROLE_ADMIN)) {
            Rol rol = new Rol();
            rol.setNombre(RolNombre.ROLE_ADMIN);
            usuarioEntity.setRol(rol);
        } else {
            Rol rol = new Rol();
            rol.setNombre(RolNombre.ROLE_USER);
            usuarioEntity.setRol(rol);
        }

        return usuarioRepository.save(usuarioEntity);
    }
}
