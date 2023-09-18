package com.leonardozw.mangacrud.web.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leonardozw.mangacrud.domain.service.MangaService;
import com.leonardozw.mangacrud.web.dto.MangaReq;
import com.leonardozw.mangacrud.web.dto.MangaRes;

@RestController
@RequestMapping("/api/v1/manga")
public class MangaController {
    
    private final MangaService mangaService;

    public MangaController(MangaService mangaService) {
        this.mangaService = mangaService;
    }

    @PostMapping("post")
    public ResponseEntity<MangaRes> post(@RequestBody MangaReq mangaReq){
        MangaRes mangaRes = mangaService.create(mangaReq);
        return ResponseEntity.status(HttpStatus.CREATED).body(mangaRes);
    }

    @GetMapping("list")
    public ResponseEntity<List<MangaRes>> list(){
        List<MangaRes> mangaListRes = mangaService.list();
        return ResponseEntity.ok(mangaListRes);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<MangaRes> getById(@PathVariable UUID id){
        MangaRes mangaRes = mangaService.getById(id);
        return ResponseEntity.ok(mangaRes);
    }

    @PostMapping("update/{id}")
    public ResponseEntity<MangaRes> update(@RequestBody MangaReq mangaReq, @PathVariable UUID id){
        MangaRes mangaRes = mangaService.update(mangaReq, id);
        return ResponseEntity.ok(mangaRes);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable UUID id){
        mangaService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
