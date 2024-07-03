package com.backend.full.Resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.full.entities.Employee;
import com.backend.full.services.EmployeeService;

@RestController
@RequestMapping("/api/employees")
public class EmployeeResource {
	@Autowired
    private EmployeeService employeeService;
	
	 @PostMapping
	    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
	        Employee createdEmployee = employeeService.saveEmployee(employee);
	        return ResponseEntity.ok(createdEmployee);
	    }

	
	 @GetMapping
	    public ResponseEntity<List<Employee>> getAllEmployees() {
	        List<Employee> employees = employeeService.getAllEmployees();
	        return ResponseEntity.ok(employees);
	    }

}
