package org.adrian.ormmapping.entity.dao;

import org.adrian.ormmapping.entity.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface ITaskDao extends CrudRepository<Task, Long> {

}
