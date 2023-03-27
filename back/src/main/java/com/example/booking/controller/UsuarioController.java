package com.example.booking.controller;

import com.example.booking.DTO.UsuarioRegistroDTO;
import com.example.booking.entity.Usuario;
import com.example.booking.service.impl.IUsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Usuario", description = "Usuario API")
@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    IUsuarioService iUsuarioService;

    @Operation(summary = "create a new usuario")
    @PostMapping("/register")
    public ResponseEntity<?> addUsuario(@RequestBody UsuarioRegistroDTO usuarioDTO) {
        Usuario usuarioCreated = iUsuarioService.save(usuarioDTO);
        return ResponseEntity.status(201).body(usuarioCreated);
    }

}
