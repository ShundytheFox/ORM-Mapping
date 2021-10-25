package org.adrian.ormmapping.entity.models;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tasks")
public class Task implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idtask")
	private long idTask;
	
	@Column(name = "nametask")
	private String nameTask;
	
	@Column(name = "datetask")
	private String dateTask;
	
	@Column(name = "descriptiontask")
	private String descriptionTask;
	
	@ManyToOne
	@JoinColumn(name = "idsubject_fk")
    private Subject subject;
	
	public Task(String nameTask, String dateTask, String descriptionTask) {
		this.nameTask = nameTask;
		this.dateTask = dateTask;
		this.descriptionTask = descriptionTask;
	}
	
	public Task() {
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}


	public long getIdTask() {
		return idTask;
	}

	public void setIdTask(long idTask) {
		this.idTask = idTask;
	}


	public String getNameTask() {
		return nameTask;
	}

	public void setNameTask(String nameTask) {
		this.nameTask = nameTask;
	}

	public String getDateTask() {
		return dateTask;
	}

	public void setDateTask(String dateTask) {
		this.dateTask = dateTask;
	}

	public String getDescriptionTask() {
		return descriptionTask;
	}

	public void setDescriptionTask(String descriptionTask) {
		this.descriptionTask = descriptionTask;
	}	
}
