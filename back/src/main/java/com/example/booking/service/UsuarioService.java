package com.example.booking.service;

import com.example.booking.DTO.UsuarioDTO;
import com.example.booking.entity.Usuario;
import com.example.booking.exception.ResourceNotFoundException;
import com.example.booking.repository.IUsuarioRepository;
import com.example.booking.service.impl.IUsuarioService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService implements IUsuarioService {
    @Autowired
    IUsuarioRepository repository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public UsuarioDTO create(UsuarioDTO usuarioDTO) {
        if (usuarioDTO == null) {
            throw new ResourceNotFoundException("Usuario", "id", usuarioDTO.getIdusuarios());
        }
        Usuario usuario = mapEntity(usuarioDTO);
        return mapDTO(repository.save(usuario));
    }
    @Override
    public UsuarioDTO findOne(Long id) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario", "Id", id));
        return mapDTO(usuario);
    }
    private UsuarioDTO mapDTO(Usuario usuario) {
        return mapper.convertValue(usuario, UsuarioDTO.class);
    }
    @Override
    public Iterable<UsuarioDTO> findAll() {
        List<UsuarioDTO> usuarioDTOList = new ArrayList<>();
        repository.findAll().forEach(usuario -> usuarioDTOList.add(mapDTO(usuario)));
        return usuarioDTOList;
    }
    @Override
    public UsuarioDTO update(UsuarioDTO usuarioDTO, Long id) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario", "Id", id));
        usuario.setNombre(usuarioDTO.getNombre());
        usuario.setApellido(usuarioDTO.getApellido());
        usuario.setEmail(usuarioDTO.getEmail());
        usuario.setContrasena(usuarioDTO.getContrasena());
        return mapDTO(repository.save(usuario));
    }
    @Override
    public void delete(Long id) {
        Usuario usuario = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario", "Id", id));
        repository.delete(usuario);
    }

    private Usuario mapEntity(UsuarioDTO usuarioDTO) {
        return mapper.convertValue(usuarioDTO, Usuario.class);
    }
}

