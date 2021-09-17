import { useRouter } from "next/router";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <div>
      Here is my my {pageNumber} content uploading to the browser through the
      window
    </div>
  );
};

export default PageNo;
