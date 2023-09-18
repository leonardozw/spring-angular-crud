package com.leonardozw.mangacrud.domain.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.leonardozw.mangacrud.domain.model.Manga;
import com.leonardozw.mangacrud.domain.repository.MangaRepository;
import com.leonardozw.mangacrud.web.dto.MangaReq;
import com.leonardozw.mangacrud.web.dto.MangaRes;

import jakarta.persistence.EntityNotFoundException;

@Service
public class MangaService {
    
    private final MangaRepository mangaRepository;

    public MangaService(MangaRepository mangaRepository) {
        this.mangaRepository = mangaRepository;
    }

    public MangaRes create(MangaReq MangaReq){
        Manga manga = toManga(MangaReq);
        manga.setId(UUID.randomUUID());
        mangaRepository.save(manga);
        return toMangaRes(manga);
    }

    public MangaRes getById(UUID id){
        Manga manga = mangaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        return toMangaRes(manga);
    }

    public List<MangaRes> list(){
        List<Manga> mangas = (List<Manga>) mangaRepository.findAll();
        return mangas.stream().map(this::toMangaRes).toList();
    }

    public MangaRes update(MangaReq MangaReq, UUID id){
        Manga manga = mangaRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        manga.setTitle(MangaReq.title());
        manga.setAuthor(MangaReq.author());
        manga.setReleaseDate(MangaReq.releaseDate());
        manga.setDemographic(MangaReq.demographic());
        manga.setStatus(MangaReq.status());
        manga.setDescription(MangaReq.description());
        mangaRepository.save(manga);
        return toMangaRes(manga);
    }

    public void delete(UUID id){
        mangaRepository.deleteById(id);
    }

    private MangaRes toMangaRes(Manga manga){
        return new MangaRes(
            manga.getId().toString(),
            manga.getTitle(),
            manga.getAuthor(),
            manga.getReleaseDate().toString(),
            manga.getDemographic().toString(),
            manga.getStatus().toString(),
            manga.getDescription()
        );
    }

    private Manga toManga(MangaReq MangaReq){
        return new Manga(
            MangaReq.title(),
            MangaReq.author(),
            MangaReq.releaseDate(),
            MangaReq.demographic(),
            MangaReq.status(),
            MangaReq.description()
        );
    }
}
