package org.adrian.ormmapping.entity.dao;

import org.adrian.ormmapping.entity.models.Subject;
import org.springframework.data.repository.CrudRepository;

public interface ISubjectDao extends CrudRepository<Subject, Long> {

}
