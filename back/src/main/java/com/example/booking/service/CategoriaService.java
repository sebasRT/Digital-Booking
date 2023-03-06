package com.example.booking.service;

import com.example.booking.DTO.CategoriaDTO;
import com.example.booking.entity.Categoria;
import com.example.booking.exception.ResourceNotFoundException;
import com.example.booking.repository.ICategoriaRepository;
import com.example.booking.service.impl.ICategoriaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService implements ICategoriaService {

    @Autowired
    ICategoriaRepository iCategoriaRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public CategoriaDTO create(CategoriaDTO categoriaDTO) {
        if (categoriaDTO == null) {
            throw new ResourceNotFoundException("Categoria", "id", categoriaDTO.getIdcategorias());
        }

        Categoria categoria = mapEntity(categoriaDTO);
        return mapDTO(iCategoriaRepository.save(categoria));
    }

    @Override
    public CategoriaDTO findOne(Long id) {
        Categoria categoria = iCategoriaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria", "Id", id));
        return mapDTO(categoria);

    }

    @Override
    public Iterable<CategoriaDTO> findAll() {
        List<CategoriaDTO> categoriaDTOList = new ArrayList<>();
        iCategoriaRepository.findAll().forEach(categoria -> categoriaDTOList.add(mapDTO(categoria)));
        return categoriaDTOList;
    }

    @Override
    public CategoriaDTO update(CategoriaDTO categoriaDTO, Long id) {
        Categoria categoria = iCategoriaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria", "Id", id));

        categoria.setTitulo(categoriaDTO.getTitulo());
        categoria.setDescripcion(categoriaDTO.getDescripcion());
        categoria.setUrl_imagen(categoriaDTO.getUrl_imagen());

        return mapDTO(iCategoriaRepository.save(categoria));
    }

    @Override
    public void delete(Long id) {
        Categoria categoria = iCategoriaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria", "Id", id));

        iCategoriaRepository.delete(categoria);

    }

    private Categoria mapEntity(CategoriaDTO categoriaDTO) {
        return mapper.convertValue(categoriaDTO, Categoria.class);
    }

    private CategoriaDTO mapDTO(Categoria categoria) {
        return mapper.convertValue(categoria, CategoriaDTO.class);
    }
}
