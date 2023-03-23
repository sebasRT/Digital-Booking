package com.example.booking.controller;

import com.example.booking.DTO.CategoriaDTO;
import com.example.booking.DTO.ClienteDTO;
import com.example.booking.entity.Cliente;
import com.example.booking.service.ClienteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Cliente", description = "Cliente API")
@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {
    @Autowired
    ClienteService iClienteService;
    @Operation(summary = "Get list of id client")
    @GetMapping("/id/{id}")
    public ResponseEntity<?> findClienteById(@PathVariable Long id) {
        ClienteDTO clienteDTO = iClienteService.findOne(id);
        return ResponseEntity.ok(clienteDTO);
    }

    @Operation(summary = "Create a new client")
    @PostMapping("/register")
    public ResponseEntity<ClienteDTO> addCliente(@RequestBody ClienteDTO clienteDTO) {
        ClienteDTO clienteCreated = iClienteService.create(clienteDTO);
        return new ResponseEntity<>(clienteCreated, HttpStatus.OK);
    }

    @Operation(summary = "Get list of clients")
    @GetMapping()
    public ResponseEntity<Iterable<ClienteDTO>> findAllClientes() {
        return ResponseEntity.ok(iClienteService.findAll());
    }

    @Operation(summary = "Update an existing client")
    @PutMapping("/{id}")
    public ResponseEntity<ClienteDTO> updateCliente(@RequestBody ClienteDTO clienteDTO, @PathVariable Long id) {
        if (iClienteService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            ClienteDTO clienteUpdated = iClienteService.update(clienteDTO, id);
            return new ResponseEntity<>(clienteUpdated, HttpStatus.OK);
        }
    }

    @Operation(summary = "Delete a client")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClient(@PathVariable Long id) {
        if (iClienteService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            iClienteService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }


}
