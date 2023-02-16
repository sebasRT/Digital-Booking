package com.dhbooking.booking.controller;

import com.dhbooking.booking.exception.ResourceNotFoundException;
import com.dhbooking.booking.model.Categoria;
import com.dhbooking.booking.repository.CategoriaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {
    @Autowired
    private CategoriaRepositorio categoriaRepositorio;

    @GetMapping
    public List<Categoria> getAllCategorias(){
        return categoriaRepositorio.findAll();
    }
    //Creacion de categoria con REST API
    @PostMapping
    public Categoria createCategoria(@RequestBody Categoria categoria){
        return categoriaRepositorio.save(categoria);
    }
    //creacion del uptade con REST API
    @PutMapping("{id}")
    public ResponseEntity<Categoria> uptadeCategoria(@PathVariable long id,@RequestBody Categoria detallesCategoria){
        Categoria updateCategoria = categoriaRepositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe categoria asociada a ese id: "+id));

        updateCategoria.setTitulo(detallesCategoria.getTitulo());
        updateCategoria.setDescripcion(detallesCategoria.getDescripcion());
        updateCategoria.setUrl_imagen(detallesCategoria.getUrl_imagen());

        categoriaRepositorio.save(updateCategoria);

        return ResponseEntity.ok(updateCategoria);
    }

    //Creacion del delete con la rest api
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCategoria(@PathVariable long id) {
        Categoria categoria= categoriaRepositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("La categoria con el id "+id+" no existe"));

        categoriaRepositorio.delete(categoria);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
