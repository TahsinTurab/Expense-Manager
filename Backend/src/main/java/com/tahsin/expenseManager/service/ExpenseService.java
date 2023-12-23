package com.tahsin.expenseManager.service;

import com.tahsin.expenseManager.dto.requestDto.ExpenseRequestDto;
import com.tahsin.expenseManager.entity.ExpenseEntity;
import com.tahsin.expenseManager.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }
    public String createExpense(ExpenseRequestDto requestDto){
        if(requestDto != null){
            ExpenseEntity expense = new ExpenseEntity();
            expense.setExpenseCategory(requestDto.getExpenseCategory());
            expense.setExpenseName(requestDto.getExpenseName());
            expense.setExpenseDescription(requestDto.getExpenseDescription());
            expense.setExpenseDate(requestDto.getExpenseDate());
            expense.setExpenseAmount(requestDto.getExpenseAmount());
            expenseRepository.save(expense);
            return "Expense Created";
        }
        else return "unable to create expense entity";
    }

    public List<ExpenseEntity> getAllExpenses(){
        return expenseRepository.findAll();
    }
}