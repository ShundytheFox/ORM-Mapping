package org.adrian.ormmapping.controllers;

import java.util.List;

import org.adrian.ormmapping.entity.models.Subject;
import org.adrian.ormmapping.entity.services.ISubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class SubjectController {
	
	@Autowired
	private ISubjectService subjectService;
	
	@GetMapping("/subjects/{idSubject}")
	public Subject getSubject(@PathVariable(value= "idSubject")
	long idSubject) {
		try {
			return subjectService.findOne(idSubject);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return subjectService.findOne(idSubject);
	}
	
	@GetMapping("/subjects")
	public List<Subject> getAllSubject(){
		try {
			return subjectService.findAll();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return subjectService.findAll();
	}
	
	@PostMapping("/subjects")
	public void save(Subject subject) {
		try {
			subjectService.save(subject);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@DeleteMapping("/subjects/{idSubject}") 
	public void delete(@PathVariable(value = "idSubject") long idSubject) {
		try {
			subjectService.delete(idSubject);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PutMapping("/subjects/{idSubject}")
	public void update(Subject subject, @PathVariable(value = "idSubject") 
	long idSubject) {
		try {
			subjectService.update(subject, idSubject);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
