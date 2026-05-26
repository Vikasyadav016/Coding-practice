import "./index.css";

interface BookType {
    bookTitle: string;
    bookPrice: string;
    bookDescription: string;
}

interface ViewTodoDetailsProps {
    bookList: BookType[];
}

const ViewTodoDetails = ({ bookList }: ViewTodoDetailsProps) => {
    return (
        <div className="maincontainer">
            {/* BOOK CARD LIST */}
            <h1>View Your Book List </h1>
            <div className="booklistcontainer">
                {bookList && bookList.length > 0 ? bookList.map((book, index) => (
                    <div className="bookcard" key={index}>
                        <h2 className="booktitle">
                            {book.bookTitle}
                        </h2>
                        <p className="bookprice">
                            ₹ {book.bookPrice}
                        </p>
                        <p className="bookdescription">
                            {book.bookDescription}
                        </p>
                    </div>
                )) :
                    <div className="nodatafound">
                        <h4>No data found</h4>
                    </div>
                }

            </div>

        </div>
    );
};

export default ViewTodoDetails;