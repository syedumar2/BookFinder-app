import BookDetails from "@/components/BookDetails/BookDetails";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useParams } from "react-router-dom";


const BookDetailsPage = () => {
    const { id } = useParams();

  return (
    <>
      <Header />
      <BookDetails id={id}/>
      <Footer />
    </>
  );
};

export default BookDetailsPage;
