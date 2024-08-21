using { ust.chitturi.hemalatha.db.master} from '../db/dataModel';
 
 
service CatalogService @(path: 'CatalogService') {
entity EmployeeSet as projection on  master.employees;
}