import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";
import TwitterEmbed from "../../components/TwitterEmbed";
const Beginner = () => {
  return (
    <MainLayout>
      <ContentLayout bgColor={`bg-[#141C27]`}>
        <TwitterEmbed bgCard={`bg-[#253446]`} textColor={`text-white`} />
      </ContentLayout>
      <ContentLayout bgColor={`bg-[#ECF8FF]`}>
        <TwitterEmbed bgCard={`bg-white`} textColor={`text-black`} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Beginner;
