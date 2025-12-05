import React, { useState} from "react";
import type { Subject } from "./Subject";


interface SubjectFormProps {
  subject?: Subject;
  onSave: (subject: Subject) => void;
  onCancel: () => void;
}

const SubjectForm: React.FC<SubjectFormProps> = ({ subject, onSave, onCancel }) => {
  const [formData, setFormData] = useState<Subject>({
    id: subject?.id || "",
    name: subject?.name || "",
    code: subject?.code || "",
    department: subject?.department || "",
    description: subject?.description || "",
    status: subject?.status || "active",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.code || !formData.department) {
      alert("Please fill all required fields!");
      return;
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Subject Name</label>
        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Subject Code</label>
        <input type="text" className="form-control" name="code" value={formData.code} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Department</label>
        <input type="text" className="form-control" name="department" value={formData.department} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea className="form-control" name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary me-2">Save</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default SubjectForm;
