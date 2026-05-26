import { useState } from "react";
import "./index.css";

type BookDetails = {
    bookTitle: string;
    bookPrice: string;
    bookDescription: string;
};

interface AddUpdateTodoProps {
    onAddBook: (book: BookDetails) => void;
}

const AddUpdateTodo = ({ onAddBook }: AddUpdateTodoProps) => {
    const [bookDetails, setBookDetails] = useState<BookDetails>({
        bookTitle: "",
        bookPrice: "",
        bookDescription: ""
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setBookDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddBook = () => {
        if (
            !bookDetails.bookTitle ||
            !bookDetails.bookPrice ||
            !bookDetails.bookDescription
        ) {
            alert("Please fill all fields");
            return;
        }
        onAddBook(bookDetails);
        setBookDetails({
            bookTitle: "",
            bookPrice: "",
            bookDescription: ""
        });
    };

    return (
        <div className="maincontainer">
            <h1>Add/Update Your Book</h1>

            <div className="addformsection">

                {/* Book Title */}
                <div className="formgroup">
                    <label className="label">Book Title</label>

                    <div className="inputfield">
                        <input
                            className="input"
                            type="text"
                            name="bookTitle"
                            value={bookDetails.bookTitle}
                            onChange={handleInputChange}
                            placeholder="Enter book title"
                        />
                    </div>
                </div>

                {/* Book Price */}
                <div className="formgroup">
                    <label className="label">Book Price</label>

                    <div className="inputfield">
                        <input
                            className="input"
                            type="text"
                            name="bookPrice"
                            value={bookDetails.bookPrice}
                            onChange={handleInputChange}
                            placeholder="Enter book price"
                        />
                    </div>
                </div>

                {/* Book Description */}
                <div className="formgroup">
                    <label className="label">Book Description</label>

                    <div className="inputfield">
                        <textarea
                            className="textarea"
                            name="bookDescription"
                            value={bookDetails.bookDescription}
                            onChange={handleInputChange}
                            placeholder="Enter description"
                        />
                    </div>
                </div>

                <button className="submitbtn" onClick={handleAddBook}>
                    Save Book
                </button>
            </div>
        </div>
    );
};

export default AddUpdateTodo;