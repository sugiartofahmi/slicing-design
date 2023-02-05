import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";
import Navbar from "../../components/Navbar";
const Home = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <h1>Home</h1>
      </ContentLayout>
    </MainLayout>
  );
};
export default Home;
