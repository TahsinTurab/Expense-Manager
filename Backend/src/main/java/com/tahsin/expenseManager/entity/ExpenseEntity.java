package com.tahsin.expenseManager.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "expense_table")
public class ExpenseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String expenseId;
    private String expenseCategory;
    private String expenseName;
    private LocalDate expenseDate;
    private String expenseDescription;
    private Double expenseAmount;
}