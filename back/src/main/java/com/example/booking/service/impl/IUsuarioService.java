package com.example.booking.service.impl;

import com.example.booking.DTO.UsuarioRegistroDTO;
import com.example.booking.entity.Usuario;

public interface IUsuarioService {

    public Usuario save(UsuarioRegistroDTO usuario);
}
