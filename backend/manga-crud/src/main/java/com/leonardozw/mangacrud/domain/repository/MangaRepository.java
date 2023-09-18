package com.leonardozw.mangacrud.domain.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.leonardozw.mangacrud.domain.model.Manga;

public interface MangaRepository extends CrudRepository<Manga, UUID>{
    
}
