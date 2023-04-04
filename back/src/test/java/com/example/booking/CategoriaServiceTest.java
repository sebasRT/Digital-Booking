package com.example.booking;


import com.example.booking.DTO.CategoriaDTO;
import com.example.booking.service.CategoriaService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CategoriaServiceTest {

    @Autowired
    private CategoriaService categoriaService;

    @Test
    public void createCategoriaTest() {

        CategoriaDTO categoriaDTO = new CategoriaDTO("Hoteles", "Hoteles de Colombia", "https://img.nh-hotels.net/KPZV/014DN/original/RE_NH_royal-urban-93_014.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white");
        categoriaService.create(categoriaDTO);
        assertNotNull(categoriaDTO.getIdcategorias());
    }

    @Test
    public void findOneCategoriaTest() {
        CategoriaDTO categoriaDTO = categoriaService.findOne(1L);
        assertNotNull(categoriaDTO);
    }

    @Test
    public void findAllCategoriaTest() {
        Iterable<CategoriaDTO> categoriaDTOList = categoriaService.findAll();
        assertNotNull(categoriaDTOList);
    }

    @Test
    public void updateCategoriaTest() {
        CategoriaDTO categoriaDTO = categoriaService.findOne(1L);
        categoriaDTO.setTitulo("Hoteles de Colombia");
        categoriaService.update(categoriaDTO, 1L);
        assertNotNull(categoriaDTO);
    }

    @Test
    public void deleteCategoriaTest() {
        categoriaService.delete(1L);
        CategoriaDTO categoriaDTO = categoriaService.findOne(1L);
        assertNull(categoriaDTO);
    }

}
