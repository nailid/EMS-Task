package com.backend.full.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.full.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	Employee findByEmail(String email);
}
