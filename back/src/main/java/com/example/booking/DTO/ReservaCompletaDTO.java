package com.example.booking.DTO;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ReservaCompletaDTO {
    private Long Id;
    private String horaComienzo;
    private String fechaInicial;
    private String fechaFinal;
    private ProductoDTO producto;
    private ClienteDTO clienteDTO;
}
