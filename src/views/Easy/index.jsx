import MainLayout from "../../layout/MainLayout";
import ContentLayout from "../../layout/ContentLayout";

const Easy = () => {
  return (
    <MainLayout>
      <ContentLayout
        bgColor={`bg-no-repeat bg-right bg-[url('/shape-bg.svg')] absolute inset-0 `}
      >
        <h1>test</h1>
      </ContentLayout>
    </MainLayout>
  );
};

export default Easy;
