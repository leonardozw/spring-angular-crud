package com.leonardozw.mangacrud.domain.model;

import java.time.LocalDate;
import java.util.UUID;

import com.leonardozw.mangacrud.domain.enums.Demographic;
import com.leonardozw.mangacrud.domain.enums.Status;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "mangas")
public class Manga {
    
    @Id
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Enumerated(EnumType.STRING)
    private Demographic demographic;

    private String description;

    @Column(nullable = false)
    private LocalDate releaseDate;

    @Enumerated(EnumType.STRING)
    private Status status;

    public Manga(String title, String author, LocalDate releaseDate, Demographic demographic, Status status, String description) {
        this.title = title;
        this.author = author;
        this.releaseDate = releaseDate;
        this.demographic = demographic;
        this.status = status;
        this.description = description;

        if(this.demographic == null){
            this.demographic = Demographic.UNKNOWN;
        }

        if(this.status == null){
            this.status = Status.UNKNOWN;
        }
        
    }
}
