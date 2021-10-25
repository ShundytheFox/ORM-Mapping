package org.adrian.ormmapping.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "teachers")
public class Teacher implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
    @Column(name = "idteacher")
    private long idTeacher;
	
	@Column(name = "nameteacher")
	private String nameTeacher;
	
	@ManyToOne
	@JoinColumn(name = "idsubject_fk")
    private Subject subject;

	public Teacher(String nameTeacher) {
		super();
		this.nameTeacher = nameTeacher;
	}

	public Teacher() {
		super();
	}

	public long getIdTeacher() {
		return idTeacher;
	}

	public void setIdTeacher(long idTeacher) {
		this.idTeacher = idTeacher;
	}

	public String getNameTeacher() {
		return nameTeacher;
	}

	public void setNameTeacher(String nameTeacher) {
		this.nameTeacher = nameTeacher;
	}
	
	

}
