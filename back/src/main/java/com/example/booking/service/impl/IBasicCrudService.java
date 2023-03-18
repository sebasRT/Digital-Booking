package com.example.booking.service.impl;

import java.util.Optional;

public interface IBasicCrudService<T> {

    T create(T t);

    T findOne(Long id);

    Iterable<T> findAll();

    T update(T t, Long id);

    void delete(Long id);
}
