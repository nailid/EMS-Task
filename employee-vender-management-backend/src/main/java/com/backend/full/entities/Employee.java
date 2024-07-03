package com.backend.full.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    private String name;
    private String designation;
    private Double ctc;
    private String email;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(Long id, String name, String designation, Double ctc, String email) {
		super();
		this.id = id;
		this.name = name;
		this.designation = designation;
		this.ctc = ctc;
		this.email = email;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public Double getCtc() {
		return ctc;
	}
	public void setCtc(Double ctc) {
		this.ctc = ctc;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
    
}
