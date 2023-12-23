package com.tahsin.expenseManager.repository;

import com.tahsin.expenseManager.entity.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ExpenseRepository extends JpaRepository<ExpenseEntity, String> {

}
