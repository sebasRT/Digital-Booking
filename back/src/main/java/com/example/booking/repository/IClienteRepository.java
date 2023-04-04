package com.example.booking.repository;

import com.example.booking.entity.Cliente;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface IClienteRepository extends JpaRepository<Cliente,Long>{

}