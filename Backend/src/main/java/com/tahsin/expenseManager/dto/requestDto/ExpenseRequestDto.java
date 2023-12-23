package com.tahsin.expenseManager.dto.requestDto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ExpenseRequestDto {
    private String expenseCategory;
    private String expenseName;
    private LocalDate expenseDate;
    private String expenseDescription;
    private Double expenseAmount;
}
