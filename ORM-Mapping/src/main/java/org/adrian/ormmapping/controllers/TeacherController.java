package org.adrian.ormmapping.controllers;

import java.util.List;

import org.adrian.ormmapping.entity.models.Subject;
import org.adrian.ormmapping.entity.models.Teacher;
import org.adrian.ormmapping.entity.services.ISubjectService;
import org.adrian.ormmapping.entity.services.ITeacherService;
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
public class TeacherController {

	@Autowired
	private ITeacherService teacherService;
	
	@GetMapping("/teachers/{idTeacher}")
	public Teacher getTeacher(@PathVariable(value= "idTeacher")
	long idTeacher) {
		try {
			return teacherService.findOne(idTeacher);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return teacherService.findOne(idTeacher);
	}
	
	@GetMapping("/teachers")
	public List<Teacher> getAllTeacher(){
		try {
			return teacherService.findAll();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return teacherService.findAll();
	}
	
	@PostMapping("/teachers")
	public void save(Teacher teacher) {
		try {
			teacherService.save(teacher);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@DeleteMapping("/teachers/{idTeacher}") 
	public void delete(@PathVariable(value = "idTeacher") long idTeacher) {
		try {
			teacherService.delete(idTeacher);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PutMapping("/teachers/{idTeacher}")
	public void update(Teacher teacher, @PathVariable(value = "idTeacher") 
	long idTeacher) {
		try {
			teacherService.update(teacher, idTeacher);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
}
