package com.example.booking.service;

import com.example.booking.DTO.ReservaDTO;
import com.example.booking.entity.Reserva;
import com.example.booking.entity.Usuario;
import com.example.booking.exception.ResourceNotFoundException;
import com.example.booking.repository.IReservaRepository;
import com.example.booking.service.impl.IReservaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservaService implements IReservaService {

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private ObjectMapper objectMapper;

    public static final String ENTITY_NOT_FOUND_MESSAGE  = "No se encontro la reserva con el id indicado";

    @Override
    public ReservaDTO create(ReservaDTO reservaDTO) {
        if (reservaDTO == null) {
            throw new ResourceNotFoundException("Reserva", "id", reservaDTO.getIdreservas());
        }

        //Si no existe el usuario, lanzar excepcion
        if (reservaDTO.getIdusuario() == null) {
            throw new ResourceNotFoundException("Usuario", "id", reservaDTO.getIdusuario().getIdusuarios());
        }

        //Si no existe el producto, lanzar excepcion
        if (reservaDTO.getIdproducto() == null) {
            throw new ResourceNotFoundException("Producto", "id", reservaDTO.getIdproducto().getIdproductos());
        }

        Reserva reserva = mapEntity(reservaDTO);
        return mapDTO(reservaRepository.save(reserva));
    }

    @Override
    public ReservaDTO findOne(Long id) {
        Reserva reserva = reservaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva", "Id", id));

        return mapDTO(reserva);
    }

    @Override
    public Iterable<ReservaDTO> findAll() {
        List<ReservaDTO> reservaDTOList = new ArrayList<>();
        reservaRepository.findAll().forEach(reserva -> reservaDTOList.add(mapDTO(reserva)));
        return reservaDTOList;
    }

    @Override
    public ReservaDTO update(ReservaDTO reservaDTO, Long id) {
        Reserva reserva = reservaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva", "Id", id));

        reserva.setHora_inicio(reservaDTO.getHora_inicio());
        reserva.setFecha_inicio(reservaDTO.getFecha_inicio());
        reserva.setFecha_fin(reservaDTO.getFecha_fin());
        reserva.setIdproducto(reservaDTO.getIdproducto());
        reserva.setIdusuario(reservaDTO.getIdusuario());

        return mapDTO(reservaRepository.save(reserva));
    }

    @Override
    public void delete(Long id) {

        Reserva reserva = reservaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reserva", "Id", id));

        reservaRepository.delete(reserva);

    }

    @Override
    public Iterable<ReservaDTO> findByProductoId(Long id) {

        List<ReservaDTO> reservaDTOList = new ArrayList<>();
        reservaRepository.findByIdproducto(id).forEach(reserva -> reservaDTOList.add(mapDTO(reserva)));
        return reservaDTOList;
    }

    @Override
    public Iterable<ReservaDTO> findByUsuarioId(Long id) {

        List<ReservaDTO> reservaDTOList = new ArrayList<>();
        reservaRepository.findByIdusuario(id).forEach(reserva -> reservaDTOList.add(mapDTO(reserva)));
        return reservaDTOList;
    }

    private ReservaDTO mapDTO(Reserva reserva) {
        return objectMapper.convertValue(reserva, ReservaDTO.class);
    }

    private Reserva mapEntity(ReservaDTO reservaDTO) {
        return objectMapper.convertValue(reservaDTO, Reserva.class);
    }
}
