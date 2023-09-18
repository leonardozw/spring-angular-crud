package com.leonardozw.mangacrud.web.dto;

import java.time.LocalDate;

import com.leonardozw.mangacrud.domain.enums.Demographic;
import com.leonardozw.mangacrud.domain.enums.Status;

public record MangaReq(String title, String author, LocalDate releaseDate, Demographic demographic, Status status, String description) {
    
}
