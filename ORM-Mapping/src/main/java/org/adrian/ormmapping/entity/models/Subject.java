package org.adrian.ormmapping.entity.models;


import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "subjects")
public class Subject implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @Column(name = "idsubject")
    private long idSubjectMain;
	
	@Column(name = "namesubject")
	private String nameSubject;
	
	public Subject() {
	}
	
	public Subject(String nameSubject) {
		super();
		this.nameSubject = nameSubject;
	}

	
	public long getIdSubjectMain() {
		return idSubjectMain;
	}

	public void setIdSubjectMain(long idSubjectMain) {
		this.idSubjectMain = idSubjectMain;
	}

	public String getNameSubject() {
		return nameSubject;
	}

	public void setNameSubject(String nameSubject) {
		this.nameSubject = nameSubject;
	}
	
	

}
