import { useState } from "react";
import { Button, ListGroup, Form } from "react-bootstrap";
import AddLessonModal from "../CourseManagement/AddLessionModal";


const Step3_Content = ({ course, setCourse, next, prev }: any) => {
  const [chapterTitle, setChapterTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentChapterIndex, setIndex] = useState(-1);

  const addChapter = () => {
    if (!chapterTitle) return;
    setCourse({
      ...course,
      chapters: [...course.chapters, { title: chapterTitle, lessons: [] }],
    });
    setChapterTitle("");
  };

  return (
    <>
      <h5>Step 3 — Build Course Content</h5>

      {/* Add Chapter */}
      <div className="d-flex gap-2 mb-3">
        <Form.Control
          placeholder="New chapter name"
          value={chapterTitle}
          onChange={(e) => setChapterTitle(e.target.value)}
        />
        <Button onClick={addChapter}>Add Chapter</Button>
      </div>

      {/* List Chapters */}
      <ListGroup>
        {course.chapters.map((chapter: any, index: number) => (
          <ListGroup.Item key={index}>
            <div className="d-flex justify-content-between">
              <strong>{chapter.title}</strong>

              <Button
                size="sm"
                onClick={() => {
                  setIndex(index);
                  setShowModal(true);
                }}
              >
                + Add Lesson
              </Button>
            </div>

            {/* Lesson List */}
            <ul className="mt-2">
              {chapter.lessons.map((l: any, i: number) => (
                <li key={i}>{l.title}</li>
              ))}
            </ul>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-3 d-flex justify-content-between">
        <Button variant="secondary" onClick={prev}>← Back</Button>
        <Button onClick={next}>Next →</Button>
      </div>

      <AddLessonModal
        show={showModal}
        onHide={() => setShowModal(false)}
        addLesson={(lesson: any) => {
          const chapters = [...course.chapters];
          chapters[currentChapterIndex].lessons.push(lesson);
          setCourse({ ...course, chapters });
        }}
      />
    </>
  );
};

export default Step3_Content;
