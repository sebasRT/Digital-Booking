package com.example.booking.controller;

import com.example.booking.DTO.CategoriaDTO;
import com.example.booking.service.impl.ICategoriaService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.tags.Tag;


@Tag(name = "Categoria", description = "Categoria API")
@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    ICategoriaService iCategoriaService;

    @Operation(summary = "Create a new categoria")
    @PostMapping("/register")
    public ResponseEntity<CategoriaDTO> addCategoria(@RequestBody CategoriaDTO categoriaDTO) {
        CategoriaDTO categoriaCreated = iCategoriaService.create(categoriaDTO);
        return new ResponseEntity<>(categoriaCreated, HttpStatus.OK);
    }

    @Operation(summary = "Get list of categorias")
    @GetMapping()
    public ResponseEntity<Iterable<CategoriaDTO>> findAllCategorias() {
        return ResponseEntity.ok(iCategoriaService.findAll());
    }

    @Operation(summary = "Update an existing categoria")
    @PutMapping("/{id}")
    public ResponseEntity<CategoriaDTO> updateCategoria(@RequestBody CategoriaDTO categoriaDTO, @PathVariable Long id) {
        if (iCategoriaService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            CategoriaDTO categoriaUpdated = iCategoriaService.update(categoriaDTO, id);
            return new ResponseEntity<>(categoriaUpdated, HttpStatus.OK);
        }
    }

    @Operation(summary = "Delete a categoria")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategoria(@PathVariable Long id) {
        if (iCategoriaService.findOne(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            iCategoriaService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
