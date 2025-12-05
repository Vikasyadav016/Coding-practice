import React, { useState } from "react";
import SubjectForm from "./SubjectForm";
import ConfirmationModal from "./ConfirmationModal";
import "./Css/styles.css"
import type { Subject } from "./Subject";

const SubjectList: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "Mathematics", code: "MATH101", department: "Science", status: "active" },
    { id: "2", name: "History", code: "HIST101", department: "Arts", status: "active" },
  ]);

  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null);

  const handleSave = (subject: Subject) => {
    if (editingSubject) {
      setSubjects(subjects.map(s => s.id === subject.id ? subject : s));
    } else {
      setSubjects([...subjects, { ...subject, id: Date.now().toString() }]);
    }
    setShowForm(false);
    setEditingSubject(null);
  };

  const handleEdit = (subject: Subject) => {
    setEditingSubject(subject);
    setShowForm(true);
  };

  const handleDelete = (subject: Subject) => {
    setSubjectToDelete(subject);
  };

  const confirmDelete = () => {
    if (subjectToDelete) {
      setSubjects(subjects.filter(s => s.id !== subjectToDelete.id));
      setSubjectToDelete(null);
    }
  };

  return (
    <div className="subject-container">
      <h2>Manage Subjects</h2>
      {!showForm ? (
        <>
          <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>+ Add Subject</button>
          <div className="table-responsive d-none d-md-block">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map(subject => (
                  <tr key={subject.id}>
                    <td>{subject.name}</td>
                    <td>{subject.code}</td>
                    <td>{subject.department}</td>
                    <td>{subject.status}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(subject)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(subject)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card view for mobile */}
          <div className="d-block d-md-none">
            {subjects.map(subject => (
              <div key={subject.id} className="subject-card">
                <h5>{subject.name} ({subject.code})</h5>
                <p><strong>Department:</strong> {subject.department}</p>
                <p><strong>Status:</strong> {subject.status}</p>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(subject)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(subject)}>Delete</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <SubjectForm
          subject={editingSubject || undefined}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditingSubject(null); }}
        />
      )}

      <ConfirmationModal
        show={!!subjectToDelete}
        message={`Are you sure you want to delete "${subjectToDelete?.name}"?`}
        onConfirm={confirmDelete}
        onCancel={() => setSubjectToDelete(null)}
      />
    </div>
  );
};

export default SubjectList;
